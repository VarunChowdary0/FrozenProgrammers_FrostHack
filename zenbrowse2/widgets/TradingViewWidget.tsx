import React from 'react';

const TradingViewWidget:React.FC = () => {
  const NewsArr =  [
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "investors.com",
    "title": "Tesla, Netflix, GE Earnings: Investing Action Plan",
    "description": "The Nasdaq set a hot pace as the market's rally hammered out yet another weekly gain. The S&P 500 turned early-week losses into a 1.5% advance, taking a record high. The Dow rose 0.7% to test resistance just below 38,000. IBD continues to hold its exposure re…",
    "url": "https://biztoc.com/x/c0630ca03919fabf",
    "urlToImage": "https://c.biztoc.com/p/c0630ca03919fabf/s.webp",
    "publishedAt": "2024-01-21T09:22:08Z",
    "content": "The Nasdaq set a hot pace as the market's rally hammered out yet another weekly gain. The S&amp;P 500 turned early-week losses into a 1.5% advance, taking a record high. The Dow rose 0.7% to test res… [+298 chars]"
    },
    {
"source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "fortune.com",
    "title": "Europe faces 'decades' trying to rid itself of its global semiconductor chip dependency, major tech consulting chief says",
    "description": "Europe is locked in a “friendshoring” tussle that looks unlikely to go away any time soon. It threatens to upend the continent’s access to energy, food, and semiconductors. Attempts to shore up supplies of the latter, though, will be a decades-long process. T…",
    "url": "https://biztoc.com/x/e782932240d16a43",
    "urlToImage": "https://c.biztoc.com/p/e782932240d16a43/s.webp",
    "publishedAt": "2024-01-21T09:20:06Z",
    "content": "Europe is locked in a friendshoring tussle that looks unlikely to go away any time soon. It threatens to upend the continents access to energy, food, and semiconductors. Attempts to shore up supplies… [+284 chars]"
    },
{
"source": {
    "id": null,
    "name": "Securityaffairs.com"
    },
    "author": "Pierluigi Paganini",
    "title": "Security Affairs newsletter Round 455 by Pierluigi Paganini – INTERNATIONAL EDITION",
    "description": "A new round of the weekly SecurityAffairs newsletter arrived! Every week the best security articles from Security Affairs are free for you in your email box. Enjoy a new round of the weekly SecurityAffairs newsletter, including the international press. Admin …",
    "url": "https://securityaffairs.com/157829/breaking-news/security-affairs-newsletter-round-455-by-pierluigi-paganini-international-edition.html",
    "urlToImage": "https://securityaffairs.com/wp-content/uploads/2015/03/newsletter.png",
    "publishedAt": "2024-01-21T09:16:45Z",
    "content": "Security Affairs newsletter Round 455 by Pierluigi Paganini INTERNATIONAL EDITION\r\n | Admin of the BreachForums hacking forum sentenced to 20 years supervised release\r\n | VF Corp December data breach… [+38474 chars]"
    },
{
"source": {
    "id": null,
    "name": "Forbes"
    },
    "author": "Brooke Crothers, Contributor, \n Brooke Crothers, Contributor\n https://www.forbes.com/sites/brookecrothers/",
    "title": "Will Elon Musk’s Politics Impact Tesla Sales?",
    "description": "As Tesla expands its lineup and cuts prices, it’s likely to get bigger and more dominant. And its CEO more vocal.  But will that blunt Tesla brand acceptance?",
    "url": "https://www.forbes.com/sites/brookecrothers/2024/01/21/will-elon-musks-politics-impact-tesla-sales/",
    "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/65a37fbf14b1c9339725bee8/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
    "publishedAt": "2024-01-21T09:16:23Z",
    "content": "GRUENHEIDE, GERMANY - MARCH 22: Tesla CEO Elon Musk attends the official opening of the new Tesla ... [+] electric car manufacturing plant on March 22, 2022 near Gruenheide, Germany. The new plant, o… [+3620 chars]"
    },
{
"source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "finance.yahoo.com",
    "title": "Down 75% Last Year, Is Fisker a Buy in 2024?",
    "description": "The idea of finding a young electric vehicle (EV) maker poised to soar for years similar to Tesla is obviously enticing, but for many young EV makers, 2023 wasn't so kind. For instance, California-based Fisker (NYSE: FSR) was hit hard as the EV maker drove ov…",
    "url": "https://biztoc.com/x/1cac5612254a0299",
    "urlToImage": "https://c.biztoc.com/p/1cac5612254a0299/s.webp",
    "publishedAt": "2024-01-21T09:08:10Z",
    "content": "The idea of finding a young electric vehicle (EV) maker poised to soar for years similar to Tesla is obviously enticing, but for many young EV makers, 2023 wasn't so kind. For instance, California-ba… [+283 chars]"
    },
{
"source": {
    "id": "fortune",
    "name": "Fortune"
    },
    "author": "Ryan Hogg",
    "title": "Europe faces 'decades' trying to rid itself of its global semiconductor chip dependency, major tech consulting chief says",
    "description": "Capgemini’s CEO says Europe’s dependency on semiconductor imports will remain ‘huge’ for years to come.",
    "url": "https://fortune.com/europe/2024/01/21/europe-global-chip-dependency-tech-consulting-capgemini/",
    "urlToImage": "https://content.fortune.com/wp-content/uploads/2024/01/GettyImages-1240911370-e1705593619870.jpg?resize=1200,600",
    "publishedAt": "2024-01-21T09:00:00Z",
    "content": "Europe is locked in a friendshoring tussle that looks unlikely to go away any time soon. It threatens to upend the continents access to energy, food, and semiconductors. Attempts to shore up supplies… [+6243 chars]"
    },
{
"source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "forbes.com",
    "title": "Satoshi Nakamoto Will ‘Erase’ Bitcoin",
    "description": "Bitcoin has surged over the last year as Wall Street giants led by BlackRock kick off a crypto \"revolution.\" Subscribe now to Forbes' CryptoAsset & Blockchain Advisor and \"uncover blockchain blockbusters poised for 1,000% plus gains\" ahead of next year's hist…",
    "url": "https://biztoc.com/x/11995027ba71b461",
    "urlToImage": "https://c.biztoc.com/p/11995027ba71b461/og.webp",
    "publishedAt": "2024-01-21T08:56:07Z",
    "content": "Bitcoin has surged over the last year as Wall Street giants led by BlackRock kick off a crypto \"revolution.\"Subscribe now to Forbes' CryptoAsset &amp; Blockchain Advisor and \"uncover blockchain block… [+308 chars]"
    },
{
"source": {
    "id": null,
    "name": "Zacjohnson.com"
    },
    "author": "Disclaimer and DMCA",
    "title": "Is Rivian Going Out of Business?",
    "description": "Rivian Automotive, the electric vehicle (EV) manufacturer, has been the subject of speculation and concerns regarding its financial health and potential bankruptcy. However, a closer look at Rivian’s fundamentals and recent updates reveals a different story. …",
    "url": "https://zacjohnson.com/is-rivian-going-out-of-business/",
    "urlToImage": "https://zacjohnson.com/wp-content/uploads/2024/01/is-rivian-going-out-of-business.jpg",
    "publishedAt": "2024-01-21T06:54:16Z",
    "content": "Rivian Automotive, the electric vehicle (EV) manufacturer, has been the subject of speculation and concerns regarding its financial health and potential bankruptcy. However, a closer look at Rivian’s… [+23422 chars]"
    },
{
"source": {
    "id": null,
    "name": "Zacjohnson.com"
    },
    "author": "Disclaimer and DMCA",
    "title": "Pelosi Net Worth Husband – Pelosi Spouse",
    "description": "Paul Pelosi is the husband of Nancy Pelosi, the 52nd speaker of the United States House of Representatives. He is an American businessman who owns and operates Financial Leasing Services, Inc., a San Francisco-based real estate and venture capital investment …",
    "url": "https://zacjohnson.com/pelosi-net-worth-husband/",
    "urlToImage": "https://zacjohnson.com/wp-content/uploads/2024/01/pelosi-net-worth-husband.jpg",
    "publishedAt": "2024-01-21T06:41:37Z",
    "content": "Paul Pelosi is the husband of Nancy Pelosi, the 52nd speaker of the United States House of Representatives. He is an American businessman who owns and operates Financial Leasing Services, Inc., a San… [+15367 chars]"
    },
{
"source": {
    "id": null,
    "name": "CleanTechnica"
    },
    "author": "José Pontes",
    "title": "25% Of New Vehicle Sales Plugin Sales In Germany In 2023!",
    "description": "30% plugin vehicle share in December! The German plugin market experienced a somewhat chaotic year in 2023, all due to ... [continued]\nThe post 25% Of New Vehicle Sales Plugin Sales In Germany In 2023! appeared first on CleanTechnica.",
    "url": "https://cleantechnica.com/2024/01/21/25-of-new-vehicle-sales-plugin-sales-in-germany-in-2023/",
    "urlToImage": "https://cleantechnica.com/wp-content/uploads/2024/01/Germany-EV-Sales-Report.png",
    "publishedAt": "2024-01-21T06:10:34Z",
    "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\n30% plugin vehicle share in December!\r\nThe German plugin market experienced a somewhat chaotic year in 2023, … [+14561 chars]"
    },
{
"source": {
    "id": null,
    "name": "Americanthinker.com"
    },
    "author": null,
    "title": "AUDIO: When it comes to Nikki Haley’s fans, the silly season has begun",
    "description": "For the most part, politics today are depressing and demoralizing. However, occasionally, something comes along that just brightens things up. Nothing does that more perfectly than a horrible song trying to inspire people about a presidential candida...",
    "url": "https://www.americanthinker.com/blog/2024/01/audio_when_it_comes_to_nikki_haleys_fans_the_silly_season_has_begun.html",
    "urlToImage": "https://www.americanthinker.com/images/bucket/2024-01/251578.jpg",
    "publishedAt": "2024-01-21T06:00:00Z",
    "content": "For the most part, politics today are depressing and demoralizing. However, occasionally, something comes along that just brightens things up. Nothing does that more perfectly than a horrible song tr… [+4819 chars]"
    },
{
"source": {
    "id": null,
    "name": "Zacjohnson.com"
    },
    "author": "Disclaimer and DMCA",
    "title": "Nancy Pelosi Husband Net Worth – Nancy Pelosi Spouse",
    "description": "When it comes to the financial status of Nancy Pelosi’s spouse, Paul Pelosi, it is no secret that he has built an impressive fortune over the years. As of 2023, Paul Pelosi’s net worth stands at a staggering $180 million. Paul Pelosi is a successful businessm…",
    "url": "https://zacjohnson.com/nancy-pelosi-husband-net-worth/",
    "urlToImage": "https://zacjohnson.com/wp-content/uploads/2024/01/nancy-pelosi-husband-net-worth.jpg",
    "publishedAt": "2024-01-21T05:36:28Z",
    "content": "When it comes to the financial status of Nancy Pelosi’s spouse, Paul Pelosi, it is no secret that he has built an impressive fortune over the years. As of 2023, Paul Pelosi’s net worth stands at a st… [+20258 chars]"
    },
{
"source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "thestreet.com",
    "title": "Tesla and Elon Musk will rock markets this week",
    "description": "After a ho-hum start to 2024, stocks took off on Thursday and Friday, with the S&P 500 finishing at an all-time high, two years after the last high, and record closes for the Dow and the Nasdaq-100. To get repeat performances in the week ahead and the week af…",
    "url": "https://biztoc.com/x/c089ddc4555e5e72",
    "urlToImage": "https://c.biztoc.com/p/c089ddc4555e5e72/s.webp",
    "publishedAt": "2024-01-21T04:04:10Z",
    "content": "After a ho-hum start to 2024, stocks took off on Thursday and Friday, with the S&amp;P 500 finishing at an all-time high, two years after the last high, and record closes for the Dow and the Nasdaq-1… [+295 chars]"
    },
{
"source": {
    "id": null,
    "name": "Livemint"
    },
    "author": "Livemint",
    "title": "Elon Musk dismisses reports about AI company's $500 million funding as ‘fake news’",
    "description": "Bloomberg had reported that xAI is in discussions for a valuation ranging between $15-20 billion and has secured $500 million in commitments, but Musk rejects these claims.",
    "url": "https://www.livemint.com/companies/people/elon-musk-dismisses-reports-about-ai-companys-funding-as-fake-news-11705804921977.html",
    "urlToImage": "https://www.livemint.com/lm-img/img/2024/01/21/1600x900/Elon_Musk_xAI_funding_1705805928016_1705805928233.jpg",
    "publishedAt": "2024-01-21T03:15:40Z",
    "content": "Tech billionaire Elon Musk has dismissed reports on the $500 million worth of funding plans for his artificial intelligence start-up xAI through posts on social media site X (formerly known as Twitte… [+2226 chars]"
    },
{
"source": {
    "id": null,
    "name": "Zacjohnson.com"
    },
    "author": "Disclaimer and DMCA",
    "title": "What is Business Strategy? Understanding the Importance of Business Strategy",
    "description": "A business strategy is the driving force behind a company’s success. It provides a clear roadmap for achieving organizational goals, creating value for customers, employees, and suppliers, and gaining a competitive advantage in the market. Having a well-defin…",
    "url": "https://zacjohnson.com/what-is-business-strategy/",
    "urlToImage": "https://zacjohnson.com/wp-content/uploads/2024/01/what-is-business-strategy.jpg",
    "publishedAt": "2024-01-21T03:08:01Z",
    "content": "A business strategy is the driving force behind a company’s success. It provides a clear roadmap for achieving organizational goals, creating value for customers, employees, and suppliers, and gainin… [+30792 chars]"
    },
{
"source": {
    "id": "abc-news-au",
    "name": "ABC News (AU)"
    },
    "author": "Mark Bennett",
    "title": "How large and small renewable energy projects are shaping Australia's landscape",
    "description": "Southern Western Australia is hosting two key projects, as solutions — big and small — are sought for the nation's growing energy needs.",
    "url": "https://www.abc.net.au/news/2024-01-21/large-and-small-scale-renewable-energy-is-transforming-wa/103371842",
    "urlToImage": "https://live-production.wcms.abc-cdn.net.au/599c17debb6ba5bf1f68605182e52c98?impolicy=wcms_crop_resize&cropH=720&cropW=1280&xPos=0&yPos=0&width=862&height=485",
    "publishedAt": "2024-01-21T02:32:15Z",
    "content": "Regional Australia is becoming the heartland for the country's energy future with renewable projects popping up across the landscape.\r\nKey points:\r\n<ul><li>An 18-turbine wind farm near Kojonup is set… [+4126 chars]"
    },
{
"source": {
    "id": null,
    "name": "Yahoo Entertainment"
    },
    "author": "Doric Sam",
    "title": "Hyundai announces massive $7,500 cash bonus for EVs — but it ends in a few days",
    "description": "“What we decided is to double down.\"",
    "url": "https://news.yahoo.com/hyundai-announces-massive-7-500-013000382.html",
    "urlToImage": "https://s.yimg.com/ny/api/res/1.2/N.z9O7F0eYxa0z9XhpEfcw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03OTg-/https://media.zenfs.com/en/the_cool_down_737/1a299b18c8ce476de180c42edb27ec75",
    "publishedAt": "2024-01-21T01:30:00Z",
    "content": "Prospective buyers of Hyundai electric vehicles have the opportunity to take home some big-money bonuses, but time is running out on the promotion.\r\nAs explained in Bloomberg, Hyundai Motor Co. will … [+2074 chars]"
    },
{
"source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "finance.yahoo.com",
    "title": "A bearish signal is flashing for the market's hottest stocks",
    "description": "None The stock market's once-in-a-generation buy opportunity is approaching, RBA said. • None The investment firm pointed to expectations for anemic big tech earnings over the next year. • None The tech bubble bursting means other areas of the market could se…",
    "url": "https://biztoc.com/x/f90f8bd33e51499d",
    "urlToImage": "https://c.biztoc.com/p/f90f8bd33e51499d/s.webp",
    "publishedAt": "2024-01-20T23:48:07Z",
    "content": "None The stock market's once-in-a-generation buy opportunity is approaching, RBA said.None The investment firm pointed to expectations for anemic big tech earnings over the next year.None The tech bu… [+284 chars]"
    },
{
"source": {
    "id": null,
    "name": "New Zealand Herald"
    },
    "author": "Steff Chávez and Peter Campbell",
    "title": "EV ‘bloodbath’ warning as Ford cuts F-150 Lightning output",
    "description": "Financial Times: Price reductions risk damaging carmakers’ financial health.",
    "url": "https://www.nzherald.co.nz/business/ev-bloodbath-warning-as-ford-cuts-f-150-lightning-output/FRWLS6WWL5DRFPKJU37KMCFQKI/",
    "urlToImage": "https://www.nzherald.co.nz/resizer/J50O9F2NzhMwUeWYHj1yzMLveu8=/1200x675/smart/filters:quality(70)/cloudfront-ap-southeast-2.images.arcpublishing.com/nzme/5U7RADL5FNBR3EB3P3CQL74P7Y.jpg",
    "publishedAt": "2024-01-20T23:08:52Z",
    "content": "Price reductions for battery-powered models risk damaging carmakers financial health. Photo / Getty ImagesStellantis boss Carlos Tavares has warned carmakers cutting electric vehicle prices too fast … [+3636 chars]"
    },
{
"source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "bostonherald.com",
    "title": "Ford cuts F-150 Lightning output, ups Bronco, Ranger production",
    "description": "Ford Motor Co.’s decision to reduce all-electric F-150 Lightning pickup production is affecting 1,400 jobs in Dearborn, Michigan. Meanwhile, it’s hiring nearly 900 people for assembly of Bronco SUVs and Ranger midsize trucks. The Dearborn automaker in a Frida…",
    "url": "https://biztoc.com/x/4eaa6a5bea849e18",
    "urlToImage": "https://c.biztoc.com/p/4eaa6a5bea849e18/s.webp",
    "publishedAt": "2024-01-20T23:08:11Z",
    "content": "Ford Motor Co.s decision to reduce all-electric F-150 Lightning pickup production is affecting 1,400 jobs in Dearborn, Michigan. Meanwhile, its hiring nearly 900 people for assembly of Bronco SUVs an… [+284 chars]"
    },
{
"source": {
    "id": null,
    "name": "Zacjohnson.com"
    },
    "author": "Disclaimer and DMCA",
    "title": "What is a Bear Hug in Business?",
    "description": "A bear hug in business refers to an aggressive merger and acquisition strategy where an acquirer makes a publicly announced offer to purchase a publicly listed company at a significant premium to its market price. This unsolicited bid is designed to appeal to…",
    "url": "https://zacjohnson.com/what-is-a-bear-hug-in-business/",
    "urlToImage": "https://zacjohnson.com/wp-content/uploads/2024/01/what-is-a-bear-hug-in-business.jpg",
    "publishedAt": "2024-01-20T22:52:28Z",
    "content": "A bear hug in business refers to an aggressive merger and acquisition strategy where an acquirer makes a publicly announced offer to purchase a publicly listed company at a significant premium to its… [+25814 chars]"
    },
{
"source": {
    "id": null,
    "name": "Seclists.org"
    },
    "author": null,
    "title": "Risks Digest 34.04",
    "description": "Posted by RISKS List Owner on Jan 20RISKS-LIST: Risks-Forum Digest Saturday 20 January 2024 Volume 34 : Issue 04\n\nACM FORUM ON RISKS TO THE PUBLIC IN COMPUTERS AND RELATED SYSTEMS (comp.risks)\nPeter G. Neumann, founder and still moderator\n\n***** See last item…",
    "url": "https://seclists.org/risks/2024/q1/2",
    "urlToImage": "https://seclists.org/images/risks-img.png",
    "publishedAt": "2024-01-20T22:50:02Z",
    "content": "From: RISKS List Owner &lt;risko () csl sri com&gt;Date: Sat, 20 Jan 2024 14:39:18 PST\r\nRISKS-LIST: Risks-Forum Digest Saturday 20 January 2024 Volume 34 : Issue 04\r\nACM FORUM ON RISKS TO THE PUBLIC … [+31557 chars]"
    },
{
"source": {
    "id": null,
    "name": "Yahoo Entertainment"
    },
    "author": "Fahad Saleem",
    "title": "22 Most Famous Hedge Fund Managers and Their Top Stock Picks",
    "description": "In this article, we will take a detailed look at the 22 Most Famous Hedge Fund Managers and Their Top Stock Picks. For a quick overview of such stocks, read ...",
    "url": "https://finance.yahoo.com/news/22-most-famous-hedge-fund-221339553.html",
    "urlToImage": "https://s.yimg.com/ny/api/res/1.2/dwu1pH206YRZEPRzriSxTw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD0xMzE4/https://media.zenfs.com/en/insidermonkey.com/0356e48fa54b183ba21be5c3772cee0b",
    "publishedAt": "2024-01-20T22:13:39Z",
    "content": "In this article, we will take a detailed look at the 22 Most Famous Hedge Fund Managers and Their Top Stock Picks. For a quick overview of such stocks, read our article 5 Most Famous Hedge Fund Manag… [+21678 chars]"
    },
{
"source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "benzinga.com",
    "title": "Elon Musk Slammed For Wanting More Tesla Control, Rivian Skids On Prospect Of Significant Losses, Fisker Faces Braking Issue Probe And More: Biggest EV…",
    "description": "Electric vehicle stocks fell across the board yet again in the week that ended on Jan. 19 as the broader market weakness in the first half of the week and negative sentiment toward the sector generated weakness. Market leader Tesla, Inc. TSLA pulled back towa…",
    "url": "https://biztoc.com/x/741a22717af20f4f",
    "urlToImage": "https://c.biztoc.com/p/741a22717af20f4f/og.webp",
    "publishedAt": "2024-01-20T22:10:09Z",
    "content": "Electric vehicle stocks fell across the board yet again in the week that ended on Jan. 19 as the broader market weakness in the first half of the week and negative sentiment toward the sector generat… [+287 chars]"
    },
{
"source": {
    "id": null,
    "name": "Los Angeles Times"
    },
    "author": "Eric Sondheimer",
    "title": "Former baseball player Mazi Mosley of St. Francis is a rising basketball prospect",
    "description": "On his 17th birthday, Mazi Mosley of St. Francis High scores 17 points at the State Preview Classic in Ontario.",
    "url": "https://www.latimes.com/sports/highschool/story/2024-01-20/prep-basketball-roundup-mazi-mosley-st-francis",
    "urlToImage": "https://ca-times.brightspotcdn.com/dims4/default/a3d4c02/2147483647/strip/true/crop/3080x1617+0+0/resize/1200x630!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F2c%2F91%2F6bd88f3f432e821e592fa079a358%2Fmazi.jpeg",
    "publishedAt": "2024-01-20T22:03:13Z",
    "content": "On his 17th birthday , 6-foot-5 junior Mazi Mosley of St. Francis scored 17 points in his teams 72-49 win over Colony at the State Preview Classic on Saturday. His mother confirmed as his birthday pr… [+1954 chars]"
    },
{
"source": {
    "id": null,
    "name": "The Daily Dot"
    },
    "author": "Jack Alban",
    "title": "‘Moving to Luxury was the best decision I ever made’: Car salesman shares the difference in selling luxury cars and used cars",
    "description": "If you're in the business of selling cars and want to have a better experience at work, you might want to ditch selling lower-priced vehicles and focus on trying to sell some of the higher-end luxury brands instead.\n\n\nAt least, that's what car salesman and Ti…",
    "url": "https://www.dailydot.com/news/luxury-vs-used-cars/",
    "urlToImage": "https://uploads.dailydot.com/2024/01/2pDwVWe8-Lexus-Dealership.jpg?auto=compress&fm=pjpg",
    "publishedAt": "2024-01-20T22:00:00Z",
    "content": "If you’re in the business of selling cars and want to have a better experience at work, you might want to ditch selling lower-priced vehicles and focus on trying to sell some of the higher-end luxury… [+4954 chars]"
    },
{
"source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "decrypt.co",
    "title": "Elon Musk’s xAI Raises $500 Million: Report",
    "description": "Elon Musk’s artificial intelligence venture xAI has secured $500 million in new funding, Bloomberg reported on Friday, amid an apparent showdown over the technology's place at his electric car company. In December, Musk’s AI startup notified the U.S. Securiti…",
    "url": "https://biztoc.com/x/d736403de03817ae",
    "urlToImage": "https://c.biztoc.com/p/d736403de03817ae/og.webp",
    "publishedAt": "2024-01-20T21:56:10Z",
    "content": "Elon Musks artificial intelligence venture xAI has secured $500 million in new funding, Bloomberg reported on Friday, amid an apparent showdown over the technology's place at his electric car company… [+285 chars]"
    },
{
"source": {
    "id": null,
    "name": "Todayifoundout.com"
    },
    "author": "Daven Hiskey",
    "title": "Everything You Know About Edison and Tesla is Mostly Wrong",
    "description": "If you’ve spent any time on the interwebs there are three almost universal facts you’re going to come across. Nikola Tesla was a God among mortals, Thomas Edison was a patent thief charlatan who we only remember today because of how he stole other people’s id…",
    "url": "http://www.todayifoundout.com/index.php/2024/01/everything-you-know-about-edison-and-tesla-is-mostly-wrong/",
    "urlToImage": "http://www.todayifoundout.com/wp-content/uploads/2024/01/Thomas_Edison_Actually_a_Great_Inventor_1.jpg",
    "publishedAt": "2024-01-20T21:28:53Z",
    "content": "If youve spent any time on the interwebs there are three almost universal facts youre going to come across. Nikola Tesla was a God among mortals, Thomas Edison was a patent thief charlatan who we onl… [+164854 chars]"
    },
{
"source": {
    "id": null,
    "name": "Notebookcheck.net"
    },
    "author": "Nicole Dominikowski",
    "title": "Following Tesla's lead, BMW will use humanoid robots in car production: 10 million jobs could be replaced",
    "description": "After Tesla caused a sensation with its humanoid robot Optimus and Hyundai teamed up with Boston Dynamics, which became famous for its robot dog Spot, BMW is now following suit: Robots with artificial intelligence are to be used in car production.",
    "url": "https://www.notebookcheck.net/Following-Tesla-s-lead-BMW-will-use-humanoid-robots-in-car-production-10-million-jobs-could-be-replaced.795209.0.html",
    "urlToImage": "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc4/bmw_tesla_robotics57.jpg",
    "publishedAt": "2024-01-20T19:36:00Z",
    "content": "After Tesla's initial success with its Tesla Optimus Gen 2 humanoid robot, BMW is now following suit. The carmaker has begun its first experiments with human-like robots with artificial intelligence … [+3025 chars]"
    },
{
"source": {
    "id": null,
    "name": "Investing.com"
    },
    "author": "U.Today",
    "title": "BlackRock's Updated Bitcoin (BTC) Holdings Uncovered, Hold on Tight",
    "description": "BlackRock's Updated Bitcoin (BTC) Holdings Uncovered, Hold on Tight",
    "url": "https://www.investing.com/news/cryptocurrency-news/blackrocks-updated-bitcoin-btc-holdings-uncovered-hold-on-tight-3278893",
    "urlToImage": "https://i-invdn-com.investing.com/news/LYNXMPEE020PS_L.jpg",
    "publishedAt": "2024-01-20T19:30:39Z",
    "content": "U.Today - In a stunning revelation, BlackRock (NYSE:BLK), the world's largest hedge fund, has rapidly amassed an impressive 16,361 BTC for its recently listed spot Bitcoin ETF. The iShares Bitcoin Tr… [+1399 chars]"
    },
{
"source": {
    "id": null,
    "name": "Freerepublic.com"
    },
    "author": "explainthatstuff",
    "title": "History of electricity",
    "description": "If the future's electric, why isn't the past? Think a little bit about that simple-sounding question and you'll understand what science is all about and why it matters so much to humankind. Consider this: the ancient Greeks knew some basic things about electr…",
    "url": "https://freerepublic.com/focus/f-chat/4211676/posts",
    "urlToImage": null,
    "publishedAt": "2024-01-20T18:47:23Z",
    "content": "Skip to comments.\r\nHistory of electricityexplainthatstuff ^\r\n | 12/3/21\r\n | Chris Woodford\r\nPosted on 01/20/2024 10:47:23 AM PST by DallasBiff\r\nIf the future's electric, why isn't the past? Think a l… [+2625 chars]"
    },
{
"source": {
    "id": null,
    "name": "NDTV News"
    },
    "author": null,
    "title": "Watch: 100+ Teslas Put Up Light Show In Houston Ahead Of Ram Temple Event",
    "description": "Barely hours away from the grand inauguration of the Ram Mandir in Ayodhya, enthusiastic devotees here have arranged an awe-inspiring and innovative Tesla car light show dedicated to Lord Ram.",
    "url": "https://www.ndtv.com/indians-abroad/watch-light-show-using-100-tesla-cars-in-houston-ahead-of-ram-temple-event-4900969",
    "urlToImage": "https://c.ndtvimg.com/2024-01/o45sicno_tesla-ram-light-show-houston_625x300_20_January_24.jpeg?ver-20240117.06",
    "publishedAt": "2024-01-20T18:11:30Z",
    "content": "The Tesla cars had a giant-sized Ram Rath in the backdrop.\r\nHouston: Barely hours away from the grand inauguration of the Ram Mandir in Ayodhya, enthusiastic devotees in Houston arranged an awe-inspi… [+2423 chars]"
    },
{
"source": {
    "id": null,
    "name": "Autoblog"
    },
    "author": "Reuters",
    "title": "BYD to stop making pouch batteries for its hybrids on leakage concerns",
    "description": "Filed under:\n Ownership,Safety,Hybrid\n Continue reading BYD to stop making pouch batteries for its hybrids on leakage concerns\nBYD to stop making pouch batteries for its hybrids on leakage concerns originally appeared on Autoblog on Sat, 20 Jan 2024 13:00:00 …",
    "url": "https://www.autoblog.com/2024/01/20/byd-to-stop-making-pouch-batteries-for-its-hybrids-on-leakage-concerns/",
    "urlToImage": "https://s.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1062x597/format/jpg/quality/100/https://s.aolcdn.com/os/ab/_cms/2024/01/19144314/japan_mobility_show_2023__in_tokyo.jpg",
    "publishedAt": "2024-01-20T18:00:00Z",
    "content": "China's BYD plans to end production of the pouch-type batteries used in its best-selling hybrids as the automaker seeks to address durability concerns and the risk that they could leak, said three pe… [+4064 chars]"
    },
{
"source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "insideevs.com",
    "title": "How This Guy Got Tesla Charging Right In -31 Degree Winter Weather",
    "description": "It turns out that if you know what you are doing, then a Tesla will fast charge without issue even at negative 31 degrees. What's the trick to getting it to charge in extreme cold? The vehicle featured in the video here is a 2022 Tesla Model Y AWD Long Range …",
    "url": "https://biztoc.com/x/ea42003fe77d1013",
    "urlToImage": "https://c.biztoc.com/p/ea42003fe77d1013/og.webp",
    "publishedAt": "2024-01-20T17:12:07Z",
    "content": "It turns out that if you know what you are doing, then a Tesla will fast charge without issue even at negative 31 degrees. What's the trick to getting it to charge in extreme cold?The vehicle feature… [+261 chars]"
    },
{
"source": {
    "id": null,
    "name": "Pausaparafeminices.com"
    },
    "author": "Bruna Tavares",
    "title": "Money Master 100 percent free Revolves /online-slots/renoir-riches/ And you can Gold coins Hyperlinks January",
    "description": "Articles Better 100 percent free Revolves No-deposit 2023 Free Revolves On the Zeus Harbors Private Games Do 100 percent free Revolves Incentives Functions For example A totally free Spins Slot Element? Mostbet Gambling establishment: 30 Totally free Spins No…",
    "url": "https://www.pausaparafeminices.com/ppf/money-master-100-percent-free-revolves-online-slots-renoir-riches-and-you-can-gold-coins-hyperlinks-january/",
    "urlToImage": null,
    "publishedAt": "2024-01-20T17:00:17Z",
    "content": "Less than, you can learn a little more about the various form of offers therefore which youlso are well informed to choose the most appropriate local casino to suit your needs. The brand new totally … [+6387 chars]"
    },
{
"source": {
    "id": "the-times-of-india",
    "name": "The Times of India"
    },
    "author": "PTI",
    "title": "Indians in Houston organise Tesla Light Show ahead of Ram Mandir inauguration",
    "description": "Barely hours away from the grand inauguration of the Ram Mandir in Ayodhya, enthusiastic devotees here have arranged an awe-inspiring and innovative Tesla car light show dedicated to Lord Ram. Over 100 Tesla car owners, calling themselves \"Ramji ki Gilahariya…",
    "url": "https://timesofindia.indiatimes.com/nri/us-canada-news/indians-in-houston-organise-tesla-light-show-ahead-of-ram-mandir-inauguration/articleshow/107016919.cms",
    "urlToImage": "https://static.toiimg.com/thumb/msid-107016958,width-1070,height-580,imgsize-1066138,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    "publishedAt": "2024-01-20T16:20:15Z",
    "content": "Barely hours away from the grand inauguration of the Ram Mandir in Ayodhya, enthusiastic devotees here have arranged an awe-inspiring and innovative Tesla car light show dedicated to Lord Ram. Over 1… [+263 chars]"
    },
{
"source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "decrypt.co",
    "title": "Elon Musk’s xAI Raises $500 Million: Report",
    "description": "Elon Musk’s artificial intelligence venture xAI has secured $500 million in new funding, Bloomberg reported on Friday, amid an apparent showdown over the technology's place at his electric car company. In December, Musk’s AI startup notified the U.S. Securiti…",
    "url": "https://biztoc.com/x/218beb4c01dc2575",
    "urlToImage": "https://c.biztoc.com/p/218beb4c01dc2575/s.webp",
    "publishedAt": "2024-01-20T16:04:10Z",
    "content": "Elon Musks artificial intelligence venture xAI has secured $500 million in new funding, Bloomberg reported on Friday, amid an apparent showdown over the technology's place at his electric car company… [+285 chars]"
    },
{
"source": {
    "id": null,
    "name": "Decrypt"
    },
    "author": "Jason Nelson",
    "title": "Elon Musk’s xAI Raises $500 Million: Report",
    "description": "The AI start-up is eyeing an up to $20 billion valuation, according to Bloomberg.",
    "url": "https://decrypt.co/213614/elon-musks-xai-raises-500-million-report",
    "urlToImage": "https://cdn.decrypt.co/resize/1024/height/512/wp-content/uploads/2023/08/elon-musk-x-twitter-gID_7.jpeg",
    "publishedAt": "2024-01-20T16:01:02Z",
    "content": "Elon Musks artificial intelligence venture xAI has secured $500 million in new funding, Bloombergreported on Friday, amid an apparent showdown over the technology's place at his electric car company.… [+2516 chars]"
    },
{
"source": {
    "id": null,
    "name": "CleanTechnica"
    },
    "author": "Industry Sponsor",
    "title": "Help States Tackle Transportation Emissions & You Might Drive Away in a Luxury EV",
    "description": "By Climate XChange\nThe post Help States Tackle Transportation Emissions & You Might Drive Away in a Luxury EV appeared first on CleanTechnica.",
    "url": "https://cleantechnica.com/2024/01/20/help-states-tackle-transportation-emissions-and-you-might-drive-away-in-a-luxury-ev/",
    "urlToImage": "https://cleantechnica.com/wp-content/uploads/2024/01/Featured-with-X.jpg",
    "publishedAt": "2024-01-20T16:00:05Z",
    "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nThe transportation sector is the largest contributor to the countrys climate pollution, accounting for a thir… [+5184 chars]"
    },
{
"source": {
    "id": null,
    "name": "New Zealand Herald"
    },
    "author": "Chris Keall",
    "title": "Uber driver: Road user charges for EVs will cost me $100 per week",
    "description": "Sums suddenly don't work out so well for bank man's life-change.",
    "url": "https://www.nzherald.co.nz/business/uber-driver-road-user-charges-for-evs-will-cost-me-100-per-week/AGFHFH3GWFF7TAHSNT64RKEBSY/",
    "urlToImage": "https://www.nzherald.co.nz/resizer/kVz6VgL8JDOcYJuzeHDHvuTNDRM=/1200x675/smart/filters:quality(70)/cloudfront-ap-southeast-2.images.arcpublishing.com/nzme/JMZY5AP5IZBYDK244BL3ORX66I.jpg",
    "publishedAt": "2024-01-20T16:00:00Z",
    "content": "A Wellington Uber driver says the Government extending road user charges (RUCs) to electric vehicles will cost him around $100 a week.\r\nWhen Transport Minister Simeon Brown confirmed this week that E… [+4175 chars]"
    },
{
"source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "cnbc.com",
    "title": "The 4 most important things we're watching in the stock market this coming week",
    "description": "The major averages were all up for the holiday shortened trading week, with the S & P 500 closing at a new all-time high on Friday, beating its last record set in January 2022. The week's biggest winner, however, was the tech-heavy Nasdaq, which gained more t…",
    "url": "https://biztoc.com/x/2fb55b9ce53fa6b8",
    "urlToImage": "https://c.biztoc.com/p/2fb55b9ce53fa6b8/s.webp",
    "publishedAt": "2024-01-20T15:34:06Z",
    "content": "The major averages were all up for the holiday shortened trading week, with the S &amp; P 500 closing at a new all-time high on Friday, beating its last record set in January 2022. The week's biggest… [+286 chars]"
    },
{
"source": {
    "id": null,
    "name": "Slashdot.org"
    },
    "author": "EditorDavid",
    "title": "S&P 500 Index Sets Record High, Thanks to 'AI-Driven Frenzy' and Tech Stocks",
    "description": "The S&P 500 index tracks 500 of the largest companies listed on U.S. stock exchanges, according to Wikipedia. \n\nAnd Friday that index \"hit an all-time closing high,\" reports the Washington Post, \"reflecting the staggering gains of a coterie of Big Tech firms …",
    "url": "https://news.slashdot.org/story/24/01/20/041234/sp-500-index-sets-record-high-thanks-to-ai-driven-frenzy-and-tech-stocks",
    "urlToImage": "https://a.fsdn.com/sd/topics/business_64.png",
    "publishedAt": "2024-01-20T15:34:00Z",
    "content": "The S&amp;P 500 index tracks 500 of the largest companies listed on U.S. stock exchanges, according to Wikipedia. And Friday that index \"hit an all-time closing high,\" reports the Washington Post, \"r… [+2159 chars]"
    },
{
"source": {
    "id": null,
    "name": "CarScoops"
    },
    "author": "Chris Chilton",
    "title": "Costly Union Contracts Could Push Automakers Towards Robot Workers | Carscoops",
    "description": "Big Three need to claw back some cash and staffing factories with machines could be one solution that the UAW will really hate",
    "url": "https://www.carscoops.com/2024/01/costly-union-contracts-could-push-automakers-towards-robot-workers/",
    "urlToImage": "https://www.carscoops.com/wp-content/uploads/2024/01/Optimus-Tesla-2.jpg",
    "publishedAt": "2024-01-20T15:31:38Z",
    "content": "Big Three need to claw back some cash and staffing factories with machines could be one solution that the UAW will really hate \r\nHenry Ford revolutionized the way cars were built when he introduced t… [+2230 chars]"
    },
{
"source": {
    "id": null,
    "name": "Investing.com"
    },
    "author": "U.Today",
    "title": "Elon Musk Surprisingly Reacts to Bitcoin's Epic Surge",
    "description": "Elon Musk Surprisingly Reacts to Bitcoin's Epic Surge",
    "url": "https://www.investing.com/news/cryptocurrency-news/elon-musk-surprisingly-reacts-to-bitcoins-epic-surge-3278863",
    "urlToImage": "https://i-invdn-com.investing.com/news/LYNXNPEE211WU_L.jpg",
    "publishedAt": "2024-01-20T15:30:29Z",
    "content": "U.Today - In a significant development for the cryptocurrency market, Yassine Elmandjra, Director of Digital Assets at ARK Invest, recently disclosed that Bitcoin's hash rate has reached an unprecede… [+1407 chars]"
    },
{
"source": {
    "id": null,
    "name": "CNBC"
    },
    "author": null,
    "title": "The 4 most important things we're watching in the stock market this coming week",
    "description": "On tap: A handful of key economic updates and a ramp up of quarterly earnings reports.",
    "url": "https://www.cnbc.com/2024/01/20/4-most-important-things-were-watching-in-the-stock-market-this-week.html",
    "urlToImage": null,
    "publishedAt": "2024-01-20T15:13:48Z",
    "content": "The major averages were all up for the holiday shortened trading week, with the S&amp;P 500 closing at a new all-time high on Friday, beating its last record set in January 2022.\r\nThe week's biggest … [+10474 chars]"
    },
{
"source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "finance.yahoo.com",
    "title": "3 Supercharged Tech Stocks to Buy Without Any Hesitation",
    "description": "Last year proved to be a good year for many tech stocks, with many reversing course from the drops they experienced in 2022. The tech-dominant Nasdaq Composite finished the year up 43%, outperforming the S&P 500 and Dow Jones. Despite the success tech stocks …",
    "url": "https://biztoc.com/x/e2f75d2abb682f48",
    "urlToImage": "https://c.biztoc.com/p/e2f75d2abb682f48/s.webp",
    "publishedAt": "2024-01-20T15:10:09Z",
    "content": "Last year proved to be a good year for many tech stocks, with many reversing course from the drops they experienced in 2022. The tech-dominant Nasdaq Composite finished the year up 43%, outperforming… [+298 chars]"
    },
{
"source": {
    "id": null,
    "name": "Forbes"
    },
    "author": "Marshall Shepherd, Senior Contributor, \n Marshall Shepherd, Senior Contributor\n https://www.forbes.com/sites/marshallshepherd/",
    "title": "A Different Perspective On Electrical Vehicles In Cold Weather",
    "description": "Recent news has focused on challenges with electrical vehicle (EV) performance during cold snaps. Here's a different perspective.",
    "url": "https://www.forbes.com/sites/marshallshepherd/2024/01/20/a-different-perspective-on-electrical-vehicles-in-cold-weather/",
    "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/65abe0691df0bf90ed3f0371/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
    "publishedAt": "2024-01-20T15:05:36Z",
    "content": "CHICAGO, ILLINOIS - JANUARY 17: A Tesla vehicle charges in a salt and ice covered parking lot on ... [+] January 17, 2024 in Chicago, Illinois. Recent research findings show that below-freezing tempe… [+6673 chars]"
    },
{
"source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "aol.com",
    "title": "A bearish signal is flashing for the market's hottest stocks",
    "description": "None The stock market's once-in-a-generation buy opportunity is approaching, RBA said. • None The investment firm pointed to expectations for anemic big tech earnings over the next year. • None The tech bubble bursting means other areas of the market could se…",
    "url": "https://biztoc.com/x/0fd087f8b09c7389",
    "urlToImage": "https://c.biztoc.com/p/0fd087f8b09c7389/s.webp",
    "publishedAt": "2024-01-20T15:04:07Z",
    "content": "None The stock market's once-in-a-generation buy opportunity is approaching, RBA said.None The investment firm pointed to expectations for anemic big tech earnings over the next year.None The tech bu… [+272 chars]"
    },
{
"source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "finance.yahoo.com",
    "title": "With Germany in recession and Detroit reeling over ultra-cheap Chinese EVs, Beijing vows to crack down on ‘blind’ construction of new projects",
    "description": "China is making automakers around the world nervous. Its domestic carmakers—helped by generous state subsidies—are churning out alarmingly inexpensive electric vehicles at a relentless pace, saturating their home market and threatening EV manufacturers overse…",
    "url": "https://biztoc.com/x/529182c1e0f160e7",
    "urlToImage": "https://c.biztoc.com/p/529182c1e0f160e7/s.webp",
    "publishedAt": "2024-01-20T14:42:09Z",
    "content": "China is making automakers around the world nervous. Its domestic carmakershelped by generous state subsidiesare churning out alarmingly inexpensive electric vehicles at a relentless pace, saturating… [+300 chars]"
    },
{
"source": {
    "id": null,
    "name": "Freerepublic.com"
    },
    "author": "CNN",
    "title": "Winter is here, but it’s losing its cool",
    "description": "Winter temperatures increased by 3.8 degrees Fahrenheit on average since 1970 in these warming locations. Winters in the fastest-warming cities have warmed by as much as 7 degrees. The Northeast and Upper Midwest are the regions warming fastest, and are runni…",
    "url": "https://freerepublic.com/focus/f-chat/4211630/posts",
    "urlToImage": null,
    "publishedAt": "2024-01-20T14:16:26Z",
    "content": "Skip to comments.\r\nWinter is here, but its losing its coolCNN ^\r\n | December 21, 2023\r\n | Elisa Raffa\r\nPosted on 01/20/2024 6:16:26 AM PST by packagingguy\r\nWinter temperatures increased by 3.8 degree… [+7023 chars]"
    },
{
"source": {
    "id": null,
    "name": "Investing.com"
    },
    "author": "U.Today",
    "title": "Top Cryptocurrencies to Watch in 2024",
    "description": "Top Cryptocurrencies to Watch in 2024",
    "url": "https://www.investing.com/news/cryptocurrency-news/top-cryptocurrencies-to-watch-in-2024-3278851",
    "urlToImage": "https://i-invdn-com.investing.com/news/Cryptocurrencies_800x533_L_1556528029.jpg",
    "publishedAt": "2024-01-20T14:02:09Z",
    "content": "U.Today - In this guide, we are going to discuss some large-cap cryptocurrencies that might be worth the attention of newbies and pro investors. As the crypto segment is gaining momentum after the 20… [+17233 chars]"
    },
{
"source": {
    "id": "business-insider",
    "name": "Business Insider"
    },
    "author": "jsor@insider.com (Jennifer Sor)",
    "title": "A bearish signal is flashing for the market's hottest stocks - and it shows there's a can't-miss opportunity brewing for investors, RBA says",
    "description": "\"This is one of those once-in-a-generation opportunities,\" RBA's Dan Suzuki said this week.",
    "url": "https://markets.businessinsider.com/news/stocks/stock-market-outlook-buy-signal-sp500-tech-stock-bubble-rba-2024-1",
    "urlToImage": "https://i.insider.com/595ce7b1d084cca4008b7558?width=1200&format=jpeg",
    "publishedAt": "2024-01-20T13:51:01Z",
    "content": "Bearish signals are flashing for the market's hottest group of stocks, and it's a sign that a can't-miss investment opportunity is on the horizon, according to Richard Bernstein Advisors.\r\nThe invest… [+3340 chars]"
    },
{
"source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "finance.yahoo.com",
    "title": "Forget Tesla, This EV Stock Is Poised for an Incredible Run",
    "description": "There's no argument that Tesla (NASDAQ: TSLA) tops the list in any discussion of electric vehicles. It also gets name-dropped regularly when it comes to a discussion of growth stocks sitting in long-term investment portfolios. After all, the company is approa…",
    "url": "https://biztoc.com/x/ef2ae3dcbad3ce53",
    "urlToImage": "https://c.biztoc.com/p/ef2ae3dcbad3ce53/s.webp",
    "publishedAt": "2024-01-20T13:32:09Z",
    "content": "There's no argument that Tesla (NASDAQ: TSLA) tops the list in any discussion of electric vehicles. It also gets name-dropped regularly when it comes to a discussion of growth stocks sitting in long-… [+288 chars]"
    },
{
"source": {
    "id": null,
    "name": "Notebookcheck.net"
    },
    "author": "Daniel Zlatev",
    "title": "Tesla charging woes in the Arctic cold snap blamed on inadequate battery preconditioning",
    "description": "Instead of arriving with a preconditioned battery at Chicago area Supercharger stations, a lot of Tesla drivers spent up to 45 minutes just warming it up for subsequent charging. Recurrent's analysis of EV charging behavior during the ongoing Arctic blast in …",
    "url": "https://www.notebookcheck.net/Tesla-charging-woes-in-the-Arctic-cold-snap-blamed-on-inadequate-battery-preconditioning.795195.0.html",
    "urlToImage": "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc4/Electric-vehicle-drivers-stranded-because-of-cold-weather-charging-problems-00-00-07-copy.jpg",
    "publishedAt": "2024-01-20T13:25:00Z",
    "content": "\"A charge that should've been 45 minutes took 2 hours\" has been a common complaint on the news lately during interviews with Tesla drivers from the Chicago area. In the current Arctic blast that is s… [+2764 chars]"
    },
{
"source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "finance.yahoo.com",
    "title": "3 Magnificent Growth ETFs That Could Triple Your Money With Next to No Effort",
    "description": "There's no safe and effective way to get rich in the stock market overnight, but with enough time, it's one of the best ways to generate wealth. The key, though, is to invest in the right places. Investing in growth exchange-traded funds (ETFs) can be a smart…",
    "url": "https://biztoc.com/x/b8137efe51c31973",
    "urlToImage": "https://c.biztoc.com/p/b8137efe51c31973/s.webp",
    "publishedAt": "2024-01-20T13:04:09Z",
    "content": "There's no safe and effective way to get rich in the stock market overnight, but with enough time, it's one of the best ways to generate wealth. The key, though, is to invest in the right places.Inve… [+264 chars]"
    },
{
"source": {
    "id": "the-times-of-india",
    "name": "The Times of India"
    },
    "author": "IANS",
    "title": "Elon Musk denies report claiming his AI firm secured $500 million funding",
    "description": "Elon Musk dismissed the report, saying, \"This is fake news from Bloomberg\", in response to a user who shared the news article on X.",
    "url": "https://economictimes.indiatimes.com/tech/technology/elon-musk-denies-report-claiming-his-ai-firm-secured-500-million-funding/articleshow/107014669.cms",
    "urlToImage": "https://img.etimg.com/thumb/msid-107014698,width-1200,height-630,imgsize-37130,overlay-ettech/photo.jpg",
    "publishedAt": "2024-01-20T13:02:54Z",
    "content": "Tech billionaire Elon Musk has denied the report claiming that his artificial intelligence (AI) company 'xAI' secured $500 million in funding toward a $1 billion goal. A report by Bloomberg, citing s… [+1404 chars]"
    },
{
"source": {
    "id": null,
    "name": "Yahoo Entertainment"
    },
    "author": "Laura Beck",
    "title": "How Rich Has Elon Musk Been During Every Decade of His Life?",
    "description": "Elon Musk is the richest person in the world right now, according to Forbes. He has a ton of money -- around $232 billion. But Musk didn't become mega-rich...",
    "url": "https://finance.yahoo.com/news/rich-elon-musk-during-every-130036338.html",
    "urlToImage": "https://s.yimg.com/ny/api/res/1.2/6vAajvjT_Z9ShBw9GZlymw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/gobankingrates_644/3b30333be1ce8194c574bfc35b82ddfb",
    "publishedAt": "2024-01-20T13:00:36Z",
    "content": "GEORGE NIKITIN / EPA-EFE / Shutterstock.com\r\nElon Musk is the richest person in the world right now, according to Forbes. He has a ton of money around $232 billion. But Musk didnt become mega-rich ov… [+3958 chars]"
    },
{
"source": {
    "id": null,
    "name": "CNET"
    },
    "author": "Stephen Shankland",
    "title": "Be Patient: Zuckerberg's Big New AI Bet Won't Revolutionize Your Life Anytime Soon - CNET",
    "description": "Meta is the newest company to pursue artificial general intelligence, a technology that's variously exciting, scary and very much unproven.",
    "url": "https://www.cnet.com/tech/computing/be-patient-zuckerbergs-big-new-ai-bet-wont-revolutionize-your-life-anytime-soon/",
    "urlToImage": "https://www.cnet.com/a/img/resize/fecc2bb9e2e139b2cce93c7576ede915e11f519f/hub/2024/01/20/d5e7368f-4385-4ec2-9f24-6b810954c687/ai-head-color-by-getty.jpg?auto=webp&fit=crop&height=675&width=1200",
    "publishedAt": "2024-01-20T13:00:22Z",
    "content": "Meta Chief Executive Mark Zuckerberg, who runs one of the biggest AI research efforts around, wants to run one that's even bigger.\r\nOn Thursday, he said Meta is leveling up its work to tackle not jus… [+5948 chars]"
    },
{
"source": {
    "id": null,
    "name": "Motorbiscuit.com"
    },
    "author": "ahiknsr",
    "title": "Tesla Employees Using Vehicle Cameras to Spy on 'Private Scenes;' Owners Suing",
    "description": "Article URL: https://www.motorbiscuit.com/tesla-employees-using-vehicle-cameras-to-spy-on-private-scenes-owners-suing/\nComments URL: https://news.ycombinator.com/item?id=39067178\nPoints: 12\n# Comments: 2",
    "url": "https://www.motorbiscuit.com/tesla-employees-using-vehicle-cameras-to-spy-on-private-scenes-owners-suing/",
    "urlToImage": "https://www.motorbiscuit.com/wp-content/uploads/2023/04/Woman-driving-a-Tesla-car.jpg?w=1200",
    "publishedAt": "2024-01-20T12:56:38Z",
    "content": "In a shocking reveal, nine retired Tesla employees shared how common it is for employees to misuse vehicle cameras to spy on customers. Employees use Teslas internal messaging app to share the conten… [+4342 chars]"
    },
{
"source": {
    "id": "business-insider",
    "name": "Business Insider"
    },
    "author": "dsiu@insider.com (Diamond Naga Siu)",
    "title": "How to find a hobby",
    "description": "Having a hobby can help people tackle their work and personal life with more energy. But relaxation isn't as easy as it looks.",
    "url": "https://www.businessinsider.com/how-to-find-a-hobby-work-life-balance-2024-1",
    "urlToImage": "https://i.insider.com/65aa0cf9dcdb354a9858d208?width=1200&format=jpeg",
    "publishedAt": "2024-01-20T12:30:01Z",
    "content": "We made it to the weekend! If you're on an airplane, be careful going to the restroom. A passenger recently got stuck in the bathroom, and the cabin crew couldn't rescue him\r\n. He had to stay there f… [+6247 chars]"
    },
{
"source": {
    "id": null,
    "name": "Wealthofgeeks.com"
    },
    "author": "Jenna Gleespen",
    "title": "24 of the Most Expensive Cars To Insure",
    "description": "People who are thinking about buying a vehicle must look at the associated costs. The purchase price is a factor, but other financial considerations must be considered. The car's fuel economy is one issue, but the insurance costs could also break your budget.…",
    "url": "https://wealthofgeeks.com/most-expensive-cars-to-insure/",
    "urlToImage": "https://wealthofgeeks.com/wp-content/uploads/2024/01/Shutterstock_2274283157.jpeg",
    "publishedAt": "2024-01-20T12:30:00Z",
    "content": "People who are thinking about buying a vehicle must look at the associated costs. The purchase price is a factor, but other financial considerations must be considered.\r\nThe car's fuel economy is one… [+8466 chars]"
    },
{
"source": {
    "id": "business-insider",
    "name": "Business Insider"
    },
    "author": "Jacob Zinkula,Matt Turner",
    "title": "Mexico's one big advantage over the US right now could stall the 'Made in America' push",
    "description": "The \"Made in America\" manufacturing push has one big problem: It's easier to find workers in Mexico.",
    "url": "https://www.businessinsider.com/mexico-manufacturing-jobs-trade-china-biden-immigration-labor-america-businesses-2024-1",
    "urlToImage": "https://i.insider.com/65a9601f6979d73718245bdc?width=1200&format=jpeg",
    "publishedAt": "2024-01-20T12:09:02Z",
    "content": "Mexico's growing manufacturing base could persuade more US businesses to shift their supply chains there — rather than the US. AP Photo/Mario Armas\r\n<ul><li>Many US businesses have taken steps to red… [+6178 chars]"
    },
{
"source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "npr.org",
    "title": "As Houthi attacks on ships escalate, experts look to COVID supply chain lessons",
    "description": "As Houthi attacks on ships escalate, experts look to COVID supply chain lessons An upsurge in attacks on commercial ships by Iranian-backed Houthi rebels in the Red Sea threatens to disrupt the global supply chain as vessels are forced to reroute around Afric…",
    "url": "https://biztoc.com/x/a48363fd6736d0df",
    "urlToImage": "https://c.biztoc.com/p/a48363fd6736d0df/s.webp",
    "publishedAt": "2024-01-20T12:08:05Z",
    "content": "As Houthi attacks on ships escalate, experts look to COVID supply chain lessonsAn upsurge in attacks on commercial ships by Iranian-backed Houthi rebels in the Red Sea threatens to disrupt the global… [+276 chars]"
    },
{
"source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "investorplace.com",
    "title": "If You Can Only Buy One EV Stock in January, It Better Be One of These 3 Names",
    "description": "EV stocks had a difficult 2023 but 2024 is looking stronger for multiple reasons 2023 has come to an end. 2024 is here and the electric vehicle industry couldn’t be happier about that transition. EV stocks suffered through a very difficult 2023. The high inte…",
    "url": "https://biztoc.com/x/376657512a678129",
    "urlToImage": "https://c.biztoc.com/p/376657512a678129/s.webp",
    "publishedAt": "2024-01-20T12:06:28Z",
    "content": "EV stocks had a difficult 2023 but 2024 is looking stronger for multiple reasons2023 has come to an end. 2024 is here and the electric vehicle industry couldnt be happier about that transition. EV st… [+278 chars]"
    },
{
"source": {
    "id": null,
    "name": "Yahoo Entertainment"
    },
    "author": null,
    "title": "Forget Tesla, This EV Stock Is Poised for an Incredible Run",
    "description": null,
    "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_b7721662-fdc7-425d-b763-96842fc9213d",
    "urlToImage": null,
    "publishedAt": "2024-01-20T12:05:00Z",
    "content": "Si vous cliquez sur « Tout accepter », nos partenaires (y compris 244 qui font partie du Cadre de transparence et de consentement dIAB) et nous utiliserons également des témoins et vos données person… [+982 chars]"
    },
{
"source": {
    "id": null,
    "name": "NPR"
    },
    "author": "Scott Neuman",
    "title": "As Houthi attacks on ships escalate, experts look to COVID supply chain lessons",
    "description": "Shipping experts hope lessons learned during the COVID-19 pandemic, the Suez Canal disruption in 2021 and Somali pirate attacks more than a decade ago will mitigate widespread problems this time.",
    "url": "https://www.npr.org/2024/01/20/1225716149/houthis-yemen-redsea-ships-israel-hamas",
    "urlToImage": "https://media.npr.org/assets/img/2024/01/19/gettyimages-1797017596_wide-3e8b42656ac3e8483fd53c83f83596920b94471a-s1400-c100.jpg",
    "publishedAt": "2024-01-20T12:01:13Z",
    "content": "The Galaxy Leader cargo ship was seized by Houthi fighters in the Red Sea in late November. The Bahamas-flagged, British-owned Galaxy Leader, operated by a Japanese firm but having links to an Israel… [+10011 chars]"
    },
{
"source": {
    "id": null,
    "name": "Techpowerup.com"
    },
    "author": "btarunr",
    "title": "TechPowerUp GPU-Z 2.57.0 Released",
    "description": "TechPowerUp today released the latest version of TechPowerUp GPU-Z, the popular graphics sub-system information, monitoring, and diagnostic utility for gamers, engineers, and enthusiasts alike. Version 2.57.0 comes with support for all of the big new GPU rele…",
    "url": "https://www.techpowerup.com/318061/techpowerup-gpu-z-2-57-0-released",
    "urlToImage": "https://www.techpowerup.com/img/S5BenKMg8VA4H3yd.jpg",
    "publishedAt": "2024-01-20T11:14:42Z",
    "content": "TechPowerUp today released the latest version of TechPowerUp GPU-Z, the popular graphics sub-system information, monitoring, and diagnostic utility for gamers, engineers, and enthusiasts alike. Versi… [+864 chars]"
    },
{
"source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "theglobeandmail.com",
    "title": "Opinion: Critics who allege equity policies are making flying less safe are pointing fingers in the wrong direction",
    "description": "Gus Carlson is a U.S.-based columnist for The Globe and Mail. As investigators probe the reason a door blew out of the fuselage of an Alaska Airlines Boeing 737 Max 9 jetliner in mid-flight earlier this month, critics of diversity, equity, inclusion and acces…",
    "url": "https://biztoc.com/x/5e97313e27abb05d",
    "urlToImage": "https://c.biztoc.com/p/5e97313e27abb05d/s.webp",
    "publishedAt": "2024-01-20T11:14:06Z",
    "content": "Gus Carlson is a U.S.-based columnist for The Globe and Mail.As investigators probe the reason a door blew out of the fuselage of an Alaska Airlines Boeing 737 Max 9 jetliner in mid-flight earlier th… [+295 chars]"
    },
{
"source": {
    "id": "business-insider",
    "name": "Business Insider"
    },
    "author": "Graham Rapier,Cadie Thompson",
    "title": "Expert lays out why last year was a 'perfect storm' to slow down EVs — and explains 3 reasons China is winning the race for electrification",
    "description": "Chinese automakers have benefited from scale that American competitors can't seem to reach, fueled by better technology and more incentives, an expert said.",
    "url": "https://www.businessinsider.com/ev-perfect-storm-gave-china-an-edge-2024-1",
    "urlToImage": "https://i.insider.com/65aaa1fadcdb354a9858f940?width=1200&format=jpeg",
    "publishedAt": "2024-01-20T10:57:01Z",
    "content": "A Chinese automaker recently overtook Tesla as the top EV seller in the world. REUTERS/China Daily\r\n<ul><li>2023 was a \"perfect storm\" for electric vehicles, one expert says. </li><li>Prices for EVs … [+3020 chars]"
    },
{
"source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "jalopnik.com",
    "title": "EV Infrastructure In The U.S. Is Getting Better",
    "description": "As much as we may bemoan the transition away from fossil fuels, it continues to become more urgently necessary the planet continues to suffer from the effects of climate change. On the bright side, there have been incredible strides in the number of available…",
    "url": "https://biztoc.com/x/9b8824e848b8dedd",
    "urlToImage": "https://c.biztoc.com/p/9b8824e848b8dedd/og.webp",
    "publishedAt": "2024-01-20T09:58:08Z",
    "content": "As much as we may bemoan the transition away from fossil fuels, it continues to become more urgently necessary the planet continues to suffer from the effects of climate change. On the bright side, t… [+300 chars]"
    },
{
"source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "theguardian.com",
    "title": "Why are Teslas’ batteries dying in the cold?",
    "description": "For nearly a week, frigid temperatures from Chicago to northern Texas have made life painful for electric vehicle owners, with reduced driving range and hours of waiting at charging stations. In Oak Brook, Illinois, near Chicago, on Monday, television reporte…",
    "url": "https://biztoc.com/x/8949911fb73e67c6",
    "urlToImage": "https://c.biztoc.com/p/8949911fb73e67c6/s.webp",
    "publishedAt": "2024-01-20T08:42:06Z",
    "content": "For nearly a week, frigid temperatures from Chicago to northern Texas have made life painful for electric vehicle owners, with reduced driving range and hours of waiting at charging stations.In Oak B… [+289 chars]"
    },
{
"source": {
    "id": null,
    "name": "ETF Daily News"
    },
    "author": "MarketBeat News",
    "title": "Tesla (NASDAQ:TSLA) Price Target Cut to $250.00",
    "description": "Tesla (NASDAQ:TSLA – Get Free Report) had its price objective dropped by equities researchers at Barclays from $260.00 to $250.00 in a research note issued on Thursday, MarketBeat reports. The brokerage presently has an “equal weight” rating on the electric v…",
    "url": "https://www.etfdailynews.com/2024/01/20/tesla-nasdaqtsla-price-target-cut-to-250-00/",
    "urlToImage": "https://www.americanbankingnews.com/wp-content/timthumb/timthumb.php?src=https://www.marketbeat.com/logos/tesla-inc-logo-1200x675.png?v=20221020135629&w=240&h=240&zc=2",
    "publishedAt": "2024-01-20T07:52:41Z",
    "content": "Tesla (NASDAQ:TSLA – Get Free Report) had its price objective dropped by equities researchers at Barclays from $260.00 to $250.00 in a research note issued on Thursday, MarketBeat reports. The broker… [+6352 chars]"
    },
{
"source": {
    "id": null,
    "name": "Thaipbsworld.com"
    },
    "author": "Franc Han Shih",
    "title": "Misunderstanding over actual size of lithium deposits found in Thailand",
    "description": "The Department of Primary Industries and Mines has explained that there appears to be a misunderstanding that two major lithium deposits in Phang-nga province have been found to contain 14.8...\nThe post Misunderstanding over actual size of lithium deposits fo…",
    "url": "https://www.thaipbsworld.com/misunderstanding-over-actual-size-of-lithium-deposits-found-in-thailand/",
    "urlToImage": "https://www.thaipbsworld.com/wp-content/uploads/2024/01/main-1-2-600x338.png",
    "publishedAt": "2024-01-20T07:03:01Z",
    "content": "The Department of Primary Industries and Mines has explained that there appears to be a misunderstanding that two major lithium deposits in Phang-nga province have been found to contain 14.8 million … [+2332 chars]"
    },
{
"source": {
    "id": null,
    "name": "Paul Tan's Automotive News"
    },
    "author": "Paul Tan",
    "title": "Tesla Model 3 deliveries halted in Australia – what is it all about and does it affect Malaysian buyers?",
    "description": "There has been reports that Tesla has been forced to halt Model 3 “Highland” deliveries in Australia over a matter of technical non-compliance with Australian rules. Here’s the gist of it – Australia Design Rules […]\nThe post Tesla Model 3 deliveries halted i…",
    "url": "https://paultan.org/2024/01/20/tesla-model-3-deliveries-halted-in-australia-what-is-it-all-about-and-does-it-affect-malaysian-buyers/",
    "urlToImage": "https://paultan.org/image/2023/11/Tesla_Model_3_Malaysia_Delivery-4-630x420.jpg",
    "publishedAt": "2024-01-20T06:35:45Z",
    "content": "There has been reports that Tesla has been forced to halt Model 3 “Highland” deliveries in Australia over a matter of technical non-compliance with Australian rules.\r\nHere’s the gist of it – Australi… [+1056 chars]"
    },
{
"source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "coingape.com",
    "title": "Elon Musk Slams Bloomberg Over ‘Fake’ xAI Funding Report",
    "description": "In a fresh wave of controversy, Elon Musk has taken to social media to dispute a recent Bloomberg report claiming that his artificial intelligence company, xAI, secured $500 million in commitments from investors. Notably, the report suggested a lofty $1 billi…",
    "url": "https://biztoc.com/x/18353444effd09d1",
    "urlToImage": "https://c.biztoc.com/p/18353444effd09d1/s.webp",
    "publishedAt": "2024-01-20T05:48:13Z",
    "content": "In a fresh wave of controversy, Elon Musk has taken to social media to dispute a recent Bloomberg report claiming that his artificial intelligence company, xAI, secured $500 million in commitments fr… [+269 chars]"
    },
{
"source": {
    "id": "next-big-future",
    "name": "Next Big Future"
    },
    "author": "Brian Wang",
    "title": "Tesla Unboxed Process Will Reduce Costs by 30%",
    "description": "Caresoft, a company similar in some ways to Munro Associates, tear down vehicles in order to reverse engineer and perform cost analysis. The CEO of Caresoft analyzed the legacy assembly line, the Tesla model Y assembly line and the Tesla next generation line.…",
    "url": "https://www.nextbigfuture.com/2024/01/tesla-unboxed-process-will-reduce-costs-by-30.html",
    "urlToImage": "https://nextbigfuture.s3.amazonaws.com/uploads/2024/01/Screen-Shot-2024-01-19-at-9.37.26-PM.jpg",
    "publishedAt": "2024-01-20T05:42:02Z",
    "content": "Caresoft, a company similar in some ways to Munro Associates, tear down vehicles in order to reverse engineer and perform cost analysis.\r\nThe CEO of Caresoft analyzed the legacy assembly line, the Te… [+1514 chars]"
    },
{
"source": {
    "id": "the-times-of-india",
    "name": "The Times of India"
    },
    "author": "New York Times",
    "title": "Crypto funds have arrived. But who needs them?",
    "description": "The SEC this month approved 11 new ETFs that track the price of bitcoin, and the decision has been heralded by promoters of bitcoin — and of the new funds — as an important event, legitimizing bitcoin as an asset class.",
    "url": "https://economictimes.indiatimes.com/markets/cryptocurrency/crypto-funds-have-arrived-but-who-needs-them/articleshow/107005348.cms",
    "urlToImage": "https://img.etimg.com/thumb/msid-107005320,width-1200,height-630,imgsize-76846,overlay-etmarkets/photo.jpg",
    "publishedAt": "2024-01-20T05:31:17Z",
    "content": "Exchange-traded funds come in many shapes and sizes. Some are plain vanilla, diversified index funds that let you invest in the entire stock and bond markets, and are excellent core holdings for the … [+9101 chars]"
    },
{
"source": {
    "id": null,
    "name": "Moneycontrol"
    },
    "author": "Devina Mehra",
    "title": "From gloom to glory: How the marketâs giant wheel turned in 2023",
    "description": "In 2023, US did not fall into a recession. The Federal Reserve hiked rates by a further 1 percentage point, sparking a phenomenal surge in the equity markets that left many financial pundits scratching their heads in disbelief. Plus, the Chinese market contin…",
    "url": "https://www.moneycontrol.com/news/opinion/from-gloom-to-glory-how-the-markets-giant-wheel-turned-in-2023-12089701.html",
    "urlToImage": "https://images.moneycontrol.com/static-mcnews/2024/01/market_volatile-8-770x433.jpg",
    "publishedAt": "2024-01-20T05:24:00Z",
    "content": "At the dawn of 2023, Wall Street's prevailing sentiment foretold doom with an economic recession, a fall in US stock prices, flat-to-falling interest rates urging a cautious shift to Treasuries and a… [+8205 chars]"
    },
{
"source": {
    "id": "next-big-future",
    "name": "Next Big Future"
    },
    "author": "Brian Wang",
    "title": "Lower Iron LFP Battery Prices Will Help Tesla Margins $TSLA",
    "description": "CATL has new rectangular LFP batteries which will be available in 6 months. The Iron LFP EV battery price will be less than $56 per kWh within six months. It is a bigger rectangular battery with each one being like six Tesla 4680 batteries. Tesla also buys Ir…",
    "url": "https://www.nextbigfuture.com/2024/01/lower-iron-lfp-battery-prices-will-help-tesla-margins-tsla.html",
    "urlToImage": "https://nextbigfuture.s3.amazonaws.com/uploads/2024/01/Screen-Shot-2024-01-19-at-9.02.30-PM.jpg",
    "publishedAt": "2024-01-20T05:08:09Z",
    "content": "Brian Wang is a Futurist Thought Leader and a popular Science blogger with 1 million readers per month. His blog Nextbigfuture.com is ranked #1 Science News Blog. It covers many disruptive technology… [+593 chars]"
    },
{
"source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "benzinga.com",
    "title": "Stellantis CEO Cautions Against Cost Reductions After Tesla Slashes Price Of Its Best-Selling SUV: 'You Will Have A Bloodbath'",
    "description": "Chrysler parent Stellantis NV STLA CEO Carlos Tavares on Friday advised against price reductions that might risk profitability and potentially make car manufacturers acquisition targets. What Happened: Stellantis is relatively more protected from the downtren…",
    "url": "https://biztoc.com/x/41807fdf28258b4b",
    "urlToImage": "https://c.biztoc.com/p/41807fdf28258b4b/s.webp",
    "publishedAt": "2024-01-20T02:56:07Z",
    "content": "Chrysler parent Stellantis NV STLA CEO Carlos Tavares on Friday advised against price reductions that might risk profitability and potentially make car manufacturers acquisition targets.What Happened… [+301 chars]"
    },
{
"source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "cnbc.com",
    "title": "Nvidia and Big Tech are still the driving forces for the market, bringing S&P 500 back to record levels",
    "description": "Thank the \"Magnificent Seven\" stocks for the S & P 500 's bounce to record levels in 2024 . Even after a blowout 2023, most of the group hasn't taken a breather, boosting the broad-based index past a record level set in January 2022 and into an official bull …",
    "url": "https://biztoc.com/x/d45ac53b84a2292e",
    "urlToImage": "https://c.biztoc.com/p/d45ac53b84a2292e/og.webp",
    "publishedAt": "2024-01-20T02:54:09Z",
    "content": "Thank the \"Magnificent Seven\" stocks for the S &amp; P 500 's bounce to record levels in 2024 . Even after a blowout 2023, most of the group hasn't taken a breather, boosting the broad-based index pa… [+282 chars]"
    },
{
"source": {
    "id": "the-times-of-india",
    "name": "The Times of India"
    },
    "author": "Reuters",
    "title": "The S&P 500's wild ride to an all-time high",
    "description": "Hopes for lower interest rates and resilient growth in 2024 took the S&P 500 stock index to a record high on Friday, after two roller-coaster years featuring soaring inflation, tumult in the banking industry and economic unease.",
    "url": "https://economictimes.indiatimes.com/markets/stocks/news/the-sp-500s-wild-ride-to-an-all-time-high/articleshow/107002125.cms",
    "urlToImage": "https://img.etimg.com/thumb/msid-107002213,width-1200,height-630,imgsize-24792,overlay-etmarkets/photo.jpg",
    "publishedAt": "2024-01-20T02:46:32Z",
    "content": "Hopes for lower interest rates and resilient growth in 2024 took the S&amp;P 500 stock index to a record high on Friday, after two roller-coaster years featuring soaring inflation, tumult in the bank… [+4087 chars]"
    },
{
"source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "investorplace.com",
    "title": "3 Stocks to Buy Before QuantumScape Takes EV Battery Stocks Higher",
    "description": "Don't miss out on what could be a strong rally for EV stocks EV battery stocks could be on the precipice of a strong rally. The catalyst of this potential rally comes from a company that’s revolutionizing the solid-state battery market, QuantumScape (NYSE: ).…",
    "url": "https://biztoc.com/x/ebbb0054b8cea762",
    "urlToImage": "https://c.biztoc.com/p/ebbb0054b8cea762/s.webp",
    "publishedAt": "2024-01-20T02:32:12Z",
    "content": "Don't miss out on what could be a strong rally for EV stocksEV battery stocks could be on the precipice of a strong rally. The catalyst of this potential rally comes from a company thats revolutioniz… [+284 chars]"
    },
{
"source": {
    "id": null,
    "name": "Internet"
    },
    "author": "Newsroom",
    "title": "Invoice Phishing Alert: TA866 Deploys WasabiSeed & Screenshotter Malware",
    "description": "The threat actor tracked as TA866 has resurfaced after a nine-month hiatus with a new large-volume phishing campaign to deliver known malware families such as WasabiSeed and Screenshotter.\nThe campaign, observed earlier this month and blocked by Proofpoint on…",
    "url": "https://thehackernews.com/2024/01/invoice-phishing-alert-ta866-deploys.html",
    "urlToImage": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEioJs1GQSYdjr1uz3xWEg8ikLLSWOhWZD7AftTYT6nUueOVujUQvSpsISg6RDwNjdqiqCogRjNuD4jfBCcKX4ZhlbOvAEzzXrX-YPLMGu2erKAnixFtUjPdWVbgPpRBL4u9gZUV5BH1_2N10DJjJ8tgG2ERY-npwClpNlHsWhZtkVvz6Klf5Hxmu92HF4VE/s728-rw-ft-e30/hook.jpg",
    "publishedAt": "2024-01-20T02:16:00Z",
    "content": "The threat actor tracked as TA866 has resurfaced after a nine-month hiatus with a new large-volume phishing campaign to deliver known malware families such as WasabiSeed and Screenshotter.\r\nThe campa… [+4574 chars]"
    },
{
"source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "fortune.com",
    "title": "Stellantis CEO warns of EV ‘bloodbath’ and ‘race to the bottom’ if car makers follow Elon Musk’s lead and start cutting prices",
    "description": "As EV demand cools, Elon Musk has stayed ahead of the field by cutting prices for Tesla’s flagship cars and sacrificing profitability to boost demand. But a competing CEO warned of a possible “red ocean” if its competitors follow suit. Carlos Tavares, CEO of …",
    "url": "https://biztoc.com/x/2a4b24c3cf3f0f54",
    "urlToImage": "https://c.biztoc.com/p/2a4b24c3cf3f0f54/og.webp",
    "publishedAt": "2024-01-20T02:12:07Z",
    "content": "As EV demand cools, Elon Musk has stayed ahead of the field by cutting prices for Teslas flagship cars and sacrificing profitability to boost demand. But a competing CEO warned of a possible red ocea… [+288 chars]"
    },
{
"source": {
    "id": "the-times-of-india",
    "name": "The Times of India"
    },
    "author": "Reuters",
    "title": "S&P 500 notches first record high close in 2 years; chipmakers soar",
    "description": "\"It really is an encouraging day in terms of the action, and 4,800 certainly has been a key level which has been difficult to surmount. So if we continue to move in this direction, that's going to be a very positive sentiment sign,\" said Lisa Erickson, head o…",
    "url": "https://economictimes.indiatimes.com/markets/stocks/news/sp-500-notches-first-record-high-close-in-2-years-chipmakers-soar/articleshow/107003511.cms",
    "urlToImage": "https://img.etimg.com/thumb/msid-107001700,width-1200,height-630,imgsize-162842,overlay-ettech/photo.jpg",
    "publishedAt": "2024-01-20T02:01:43Z",
    "content": "The S&amp;P 500 posted a record high close on Friday for the first time in two years, fueled by a rally in chipmakers and other heavyweight technology stocks on optimism around artificial intelligenc… [+4069 chars]"
    },
{
"source": {
    "id": "the-times-of-india",
    "name": "The Times of India"
    },
    "author": "Reuters",
    "title": "S&P 500 notches first record high close in 2 years; chipmakers soar",
    "description": "\"It really is an encouraging day in terms of the action, and 4,800 certainly has been a key level which has been difficult to surmount. So if we continue to move in this direction, that's going to be a very positive sentiment sign,\" said Lisa Erickson, head o…",
    "url": "https://economictimes.indiatimes.com/markets/stocks/news/sp-500-notches-first-record-high-close-in-2-years-chipmakers-soar/articleshow/107001684.cms",
    "urlToImage": "https://img.etimg.com/thumb/msid-107001700,width-1200,height-630,imgsize-162842,overlay-etmarkets/photo.jpg",
    "publishedAt": "2024-01-20T02:01:43Z",
    "content": "The S&amp;P 500 posted a record high close on Friday for the first time in two years, fueled by a rally in chipmakers and other heavyweight technology stocks on optimism around artificial intelligenc… [+3630 chars]"
    },
{
"source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "electrek.co",
    "title": "Stellantis takes a jab at Tesla, warns EV price cuts could cause 'bloodbath'",
    "description": "At least one automaker will avoid cutting EV prices to compete with Tesla. Stellantis CEO Carlos Tavares took aim at Tesla, saying EV price cuts could lead to a “bloodbath,” and the brand is avoiding a race to the bottom. After unveiling Stellantis’ second EV…",
    "url": "https://biztoc.com/x/5570972996eb30fd",
    "urlToImage": "https://c.biztoc.com/p/5570972996eb30fd/og.webp",
    "publishedAt": "2024-01-20T01:58:10Z",
    "content": "At least one automaker will avoid cutting EV prices to compete with Tesla. Stellantis CEO Carlos Tavares took aim at Tesla, saying EV price cuts could lead to a bloodbath, and the brand is avoiding a… [+276 chars]"
    },
{
"source": {
    "id": null,
    "name": "Moneycontrol"
    },
    "author": "Reuters",
    "title": "SP 500 notches first record high close in 2 years; chipmakers soar",
    "description": "The benchmark's close confirmed that the S&amp;P 500 has been in a bull market since it closed at its low on Oct. 12, 2022, according to one measure which also puts that date as the end of a bear market.",
    "url": "https://www.moneycontrol.com/news/business/markets/s-chipmakers-soar-12089761.html",
    "urlToImage": "https://images.moneycontrol.com/static-mcnews/2020/08/wall-street-1-770x433.jpg",
    "publishedAt": "2024-01-20T01:48:35Z",
    "content": "The S&amp;P 500, opens new tab posted a record high close on Friday for the first time in two years, fueled by a rally in chipmakers and other heavyweight technology stocks on optimism around artific… [+4009 chars]"
    },
{
"source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "fortune.com",
    "title": "With Germany in recession and Detroit reeling over ultra-cheap Chinese EVs, Beijing vows to crack down on ‘blind’ construction of new projects",
    "description": "China is making automakers around the world nervous. Its domestic carmakers—helped by generous state subsidies—are churning out alarmingly inexpensive electric vehicles at a relentless pace, saturating their home market and threatening EV manufacturers overse…",
    "url": "https://biztoc.com/x/d7a9587632d57a63",
    "urlToImage": "https://c.biztoc.com/p/d7a9587632d57a63/og.webp",
    "publishedAt": "2024-01-20T01:44:13Z",
    "content": "China is making automakers around the world nervous. Its domestic carmakershelped by generous state subsidiesare churning out alarmingly inexpensive electric vehicles at a relentless pace, saturating… [+294 chars]"
    },
{
"source": {
    "id": null,
    "name": "CleanTechnica"
    },
    "author": "José Pontes",
    "title": "Top 10 Battery Producers In The World — 2023 (Provisional Data)",
    "description": "While there are regular reports about sales performances of the best selling EVs, as one can see here, here, and ... [continued]\nThe post Top 10 Battery Producers In The World — 2023 (Provisional Data) appeared first on CleanTechnica.",
    "url": "https://cleantechnica.com/2024/01/19/top-10-battery-producers-in-the-world-2023-provisional-data/",
    "urlToImage": "https://cleantechnica.com/wp-content/uploads/2023/04/CATL-500-wh-kg-battery-1.jpg",
    "publishedAt": "2024-01-20T01:42:39Z",
    "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nWhile there are regular reports about sales performances of the best selling EVs, as one can see here, here, … [+4964 chars]"
    },
{
"source": {
    "id": null,
    "name": "Slashdot.org"
    },
    "author": "feedfeeder",
    "title": "Dow Jones, S&P 500 Hit Record Highs As Leading Stocks Run; Tesla, Netflix Earnings Due - Investor's Business Daily",
    "description": "Dow Jones, S&P 500 Hit Record Highs As Leading Stocks Run; Tesla, Netflix Earnings DueInvestor's Business Daily Stocks Climb to Record, Lifted by Big Tech and Rate Cut HopesThe New York Times S&P 500 hits new record high amid signs of easing US economic gloom…",
    "url": "https://slashdot.org/firehose.pl?op=view&amp;id=172784359",
    "urlToImage": null,
    "publishedAt": "2024-01-20T01:13:37Z",
    "content": "Sign up for the Slashdot newsletter! OR check out the new Slashdot job board to browse remote jobs or jobs in your areaDo you develop on GitHub? You can keep using GitHub but automatically sync your … [+268 chars]"
    },
{
"source": {
    "id": null,
    "name": "HuffPost"
    },
    "author": "AP",
    "title": "Wall Street Hits Record High Following A 2-Year Round Trip Scarred By Inflation",
    "description": "Wall Street returned to record heights and capped a punishing, two-year round trip dogged by high inflation and worries about a possible recession.",
    "url": "https://www.huffpost.com/entry/wall-street-record-high-financial-markets_n_65ab1d02e4b076abd7abaa49",
    "urlToImage": "https://img.huffingtonpost.com/asset/65ab1d052400003b0027f88c.jpeg?cache=vEtXIbqiRM&ops=1200_630",
    "publishedAt": "2024-01-20T01:13:25Z",
    "content": "NEW YORK, NEW YORK - JANUARY 19: Traders work on the floor of the New York Stock Exchange (NYSE) on January 19, 2024 in New York City. Stocks closed up over 350 points while the S&amp;P 500 closed at… [+8792 chars]"
    },
{
"source": {
    "id": null,
    "name": "Shawlocal.com"
    },
    "author": "Stan Choe - The Associated Press",
    "title": "Wall Street hits record high following a 2-year round trip scarred by inflation",
    "description": "The S&P 500 closed Friday at a record high. Some encouraging data came Friday after a preliminary report from the University of Michigan suggested the mood among U.S. consumers is roaring higher.",
    "url": "https://www.shawlocal.com/news/2024/01/20/wall-street-hits-record-high-following-a-2-year-round-trip-scarred-by-inflation/",
    "urlToImage": "https://www.shawlocal.com/resizer/lcbPU1YzPuT3a22GAv98CtpFKfk=/1200x630/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/shawmedia/KR2KFVHPWZDO7FIKD7VXD5KFDU.jpg",
    "publishedAt": "2024-01-20T00:46:42Z",
    "content": "NEW YORK — (AP) Wall Street returned to record heights Friday to cap a punishing, two-year round trip dogged by high inflation and worries about a recession that seemed inevitable but hasnt arrived.\r… [+6290 chars]"
    },
{
"source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "aol.com",
    "title": "Stellantis CEO warns of EV ‘bloodbath’ and ‘race to the bottom’ if car makers follow Elon Musk’s lead and start cutting prices",
    "description": "As EV demand cools, Elon Musk has stayed ahead of the field by cutting prices for Tesla’s flagship cars and sacrificing profitability to boost demand. But a competing CEO warned of a possible “red ocean” if its competitors follow suit. Carlos Tavares, CEO of …",
    "url": "https://biztoc.com/x/77e34662baf12ac9",
    "urlToImage": "https://c.biztoc.com/p/77e34662baf12ac9/s.webp",
    "publishedAt": "2024-01-20T00:32:08Z",
    "content": "As EV demand cools, Elon Musk has stayed ahead of the field by cutting prices for Teslas flagship cars and sacrificing profitability to boost demand. But a competing CEO warned of a possible red ocea… [+282 chars]"
    },
{
"source": {
    "id": null,
    "name": "Marketscreener.com"
    },
    "author": null,
    "title": "Musk's AI company secures $500 million Toward $1 billion funding goal- Bloomberg News",
    "description": "(marketscreener.com) Elon Musk's artificial intelligence company, xAI, has secured $500 million in commitments from investors toward a $1 billion goal, Bloomberg News reported on Friday.https://www.marketscreener.com/business-leaders/Elon-Musk-1364/news/Musk-…",
    "url": "https://www.marketscreener.com/business-leaders/ELON-MUSK-1364/news/Musk-s-AI-company-secures-500-million-Toward-1-billion-funding-goal-Bloomberg-News-45778879/",
    "urlToImage": "https://www.marketscreener.com/images/reuters/2024-01/2024-01-20T002521Z_1_LYNXMPEK0J005_RTROPTP_3_TWITTER-MUSK.JPG",
    "publishedAt": "2024-01-20T00:25:21Z",
    "content": "Mr. Elon R. Musk is a Chief Executive Officer at The Boring Co., a Technoking of Tesla at Tesla, Inc., a Chief Executive Officer &amp; Director at Space Exploration Technologies Corp., a Chief Execut… [+991 chars]"
    },
{
"source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "nytimes.com",
    "title": "Stocks Climb to Record, Lifted by Big Tech and Rate Cut Hopes",
    "description": "The S&P 500 crossed above its January 2022 peak after weeks of wavering. Investors have been buying stocks after homing in on signals that the Fed’s campaign of raising interest rates is over. The stock market broke through to new heights on Friday, with the …",
    "url": "https://biztoc.com/x/8b5b226abb733de3",
    "urlToImage": "https://c.biztoc.com/p/8b5b226abb733de3/s.webp",
    "publishedAt": "2024-01-20T00:06:13Z",
    "content": "The S&amp;P 500 crossed above its January 2022 peak after weeks of wavering. Investors have been buying stocks after homing in on signals that the Feds campaign of raising interest rates is over.The … [+304 chars]"
    },
{
"source": {
    "id": null,
    "name": "Notebookcheck.net"
    },
    "author": "Julian van der Merwe",
    "title": "Icy Tesla Cybertruck towing torture test tips triple-digit range — barely",
    "description": "The Cybertruck just barely clocked 103 miles (ca. 166 km) of range while towing an electrified Humvee in below-freezing weather.",
    "url": "https://www.notebookcheck.net/Icy-Tesla-Cybertruck-towing-torture-test-tips-triple-digit-range-barely.794949.0.html",
    "urlToImage": "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc4/cybertruck-cold-towing-test-news-teaser.jpg",
    "publishedAt": "2024-01-20T00:05:00Z",
    "content": "The Tesla Cybertruck was billed by Tesla as an electric pickup truck made to do \"real work,\" despite Ford protesting to the contrary. While the Cybertruck certainly has the power to haul and tow larg… [+2669 chars]"
    },
{
"source": {
    "id": null,
    "name": "Stockcharts.com"
    },
    "author": "Jayanthi Gopalakrishnan",
    "title": "Dow Jones and S&P 500 Close At Record High -- Time to Add Tech Stocks To Your Portfolio?",
    "description": "Tech stocks are striking back after a rough start in the first week of the trading year. Back then, it might have been inconceivable to think that tech stocks would lead a bullish rally, but that narrative has changed quickly. Today's continuation of yesterda…",
    "url": "https://stockcharts.com/articles/chartwatchers/2024/01/dow-jones-and-sp-500-close-at-922.html",
    "urlToImage": "https://stockcharts.com/img/articles/2024/01/19/146eb780-fd86-47fb-a031-8c0a3dffd971.jpg",
    "publishedAt": "2024-01-20T00:04:14Z",
    "content": "<ul><li>Dow Jones Industrial Average and S&amp;P 500 close at record highs</li><li>Technology stocks are back in the spotlight, with the Nasdaq 100 closing up 1.95%</li><li>Keep an eye on momentum an… [+4947 chars]"
    },
{
"source": {
    "id": null,
    "name": "New York Post"
    },
    "author": "Associated Press",
    "title": "S&P 500 hits a record high after two years of high inflation, recession worries",
    "description": "The index erased the last of its losses since setting its prior record of 4,796.56 at the start of 2022. During that time, it dropped as much as 25%.",
    "url": "https://nypost.com/2024/01/19/business/sampp-500-hits-a-record-high-after-two-years-of-high-inflation-recession-worries/",
    "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2024/01/stock-market-record.jpg?quality=75&strip=all&1705689852&w=1024",
    "publishedAt": "2024-01-19T23:57:15Z",
    "content": "Wall Street returned to record heights Friday to cap a punishing, two-year round trip dogged by high inflation and worries about a recession that seemed inevitable but hasnt arrived.\r\nThe S&amp;P 500… [+6366 chars]"
    }
    ]
  return (
    <div className=' flex flex-wrap justify-around space-y-4 overflow-y-auto'>
      {
        NewsArr.slice(NewsArr.length-50).map((wl:any,idx)=>
        <div key={idx} className=' h-[300px] w-[400px] rounded-md '>
          <img src={wl.urlToImage} alt="" />
        </div>
        )
      }
    </div>
  );
}

export default TradingViewWidget;
