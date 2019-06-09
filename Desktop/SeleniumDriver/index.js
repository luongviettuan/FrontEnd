var msv = 'B15DCCN604'
var con = require('./model')
var webdriver = require('selenium-webdriver')
    By = webdriver.By,
    Until = webdriver.Until;
var chromeCapabilities = webdriver.Capabilities.chrome()
var chromeOptions = {
            'args': ['--disable-infobars']
    };
chromeCapabilities.set('chromeOptions', chromeOptions);
var driver = new webdriver.Builder().forBrowser('chrome').withCapabilities(chromeCapabilities).build();
    driver.get(`http://qldt.ptit.edu.vn/default.aspx?page=thoikhoabieu&sta=1&id=${msv}`);
    driver.findElement(By.css('#ctl00_ContentPlaceHolder1_ctl00_ddlChonNHHK > option:nth-child(2)')).click().then(()=>{
        driver.findElement(By.name('ctl00$ContentPlaceHolder1$ctl00$rad_ThuTiet')).click()
                .then(()=>driver.getPageSource())
                .then((src)=>{
                    const $ = require('cheerio').load(src);
                    var body = $('.grid-roll2 .body-table tbody tr td')
                    var temp =[]
                    $(body).each(function(i, span){
                        temp.push($(this).text().replace('\n','').trim())
                    })
                    let json = []
                    
                    for(var i = 0; i< temp.length;i = i+15){
                        // let jsonObject = {}
                        // jsonObject.MaMH = temp[i]
                        // jsonObject.TenMH = temp[i+1]
                        // jsonObject.NMH = temp[i+2]
                        // jsonObject.Thu = temp[i+8]
                        // jsonObject.TietBD = temp[i+9]
                        // jsonObject.ST = temp[i+10]
                        // jsonObject.Phong = temp[i+11]
                        // jsonObject.Tuan = temp[i+13]
                        // json.push(jsonObject)
                        console.log(temp[i+13]);
                        
                        let sql = 'INSERT INTO TKB VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)'
                        con.query(sql, [msv, temp[i], temp[i +1], temp[i+2], temp[i+8], temp[i +9], temp[i+10], temp[i+11],temp[i+13]], (err, result)=>{
                            if(err) throw err           
                            
                        })
                    }
                    //console.log(json);
                    
                })
        
    })

    