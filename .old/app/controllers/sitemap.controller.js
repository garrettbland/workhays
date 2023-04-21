var Models = require('../models')
var moment = require('moment')
const { Op } = require("sequelize")
var builder = require('xmlbuilder')

exports.generateSitemap = async (req, res) => {
    try {
        
        const jobs = await Models.job.findAll({
            where: {
                status: 'active',
                renewed: {
                    [Op.gt]: moment.tz(moment(), 'America/Chicago').subtract(14, 'days').endOf('day')
                }
            },
            order: [['renewed', 'DESC']],
        })

        const employers = await Models.employer.findAll()

        const lastModDate = moment.tz(moment(), 'America/Chicago').format('YYYY-MM-DD')

        const staticPages = [
            {
                location: '/',
                lastMod: lastModDate
            },
            {
                location: '/employers',
                lastMod: lastModDate
            },
            {
                location: '/about',
                lastMod: lastModDate
            },
            {
                location: '/contact',
                lastMod: lastModDate
            },
            {
                location: '/signup',
                lastMod: lastModDate
            },
            {
                location: '/signin',
                lastMod: lastModDate
            },
            {
                location: '/privacy',
                lastMod: lastModDate
            },
            {
                location: '/terms',
                lastMod: lastModDate
            },
            {
                location: '/help',
                lastMod: lastModDate
            }
        ]

        let xml_sitemap = builder.create('urlset')

        staticPages.forEach(function (page) {
            var item = xml_sitemap.ele('url')
            item.ele('loc', 'https://workhays.com'+page.location)
            item.ele('lastmod', page.lastMod)
        })

        jobs.forEach(function (job) {
            var item = xml_sitemap.ele('url')
            item.ele('loc', 'https://workhays.com/jobs/'+job.id)
            item.ele('lastmod', moment.tz(job.renewed, 'America/Chicago').format('YYYY-MM-DD'))
        })

        employers.forEach(function (employer) {
            var item = xml_sitemap.ele('url')
            item.ele('loc', 'https://workhays.com/employers/'+employer.id)
            item.ele('lastmod', moment.tz(employer.updated_at, 'America/Chicago').format('YYYY-MM-DD'))
        })

        let xml_sitemap_end = xml_sitemap.end({pretty: true})

        // res.send({
        //     jobs:jobs,
        //     employers:employers
        // })

        // let xml_content = [
        //     '<?xml version="1.0" encoding="UTF-8"?>',
        //     '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
        //     '  <url>',
        //     '    <loc>http://www.example.com/</loc>',
        //     '    <lastmod>2005-01-01</lastmod>',
        //     '  </url>',
        //     '</urlset>'
        //   ]
          res.set('Content-Type', 'text/xml')
          res.send(xml_sitemap_end)

    } catch (err) {
        console.log(err)
        res.status(404).render('error')
    }
}