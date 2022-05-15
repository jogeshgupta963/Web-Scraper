// const express = require('express')
// const cheerio = require('cheerio')
// const axios = require('axios');
// const chalk = require('chalk');

import express from 'express'
import cheerio from 'cheerio'
import axios from 'axios'
import chalk from 'chalk'


async function getData(){
    try {
        const url = 'https://www.internship-fair.edctiet.in/internships.html'

        const {data }= await axios.get(url); 
        const $ = cheerio.load(data);
        const card=`body > section > div > div > div > div`
        $(card).map((parentIdx,parentElm)=>{
            const stipend = `body > section > div > div > div:nth-child(${parentIdx}) > div > div > div.flip-card-front > h4`
            const company =`body > section > div > div > div:nth-child(${parentIdx}) > div > div > div.flip-card-front > h2`
            const company2 = `body > section > div > div > div:nth-child(${parentIdx}) > div > div > div.flip-card-front > h3`

            const ulTag = `body > section > div > div > div:nth-child(${parentIdx}) > div > div > div.flip-card-front > ul>li`
    
            if($(ulTag).text().match('Web Dev')){
                if($(company2).text())
                console.log(chalk.blue($(stipend).text())+chalk.red("  company: ")+$(company2).text())
                else
                console.log(chalk.blue($(stipend).text())+chalk.red("  company: ")+$(company).text())
            }
        })


    } catch (err) {
        console.log(err.message)
    }
}
getData();
