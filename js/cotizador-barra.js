let barraDeCotizacion = document.getElementById("barraDeCotizacion");

fetch("https://api.bluelytics.com.ar/v2/evolution.json")
	.then((res) => res.json())
	.then((data) => {
		console.log(data[0]);
		console.log(data[1]);
		let nuavaInfo = document.createElement("div");
		nuavaInfo.innerHTML = `
        <h6><span><i class="fa-solid fa-money-bill-1-wave" style="color:#e2f4e9, 214, 98);"></i></span> Dolar ${data[0].source} Valor de venta: ${data[0].value_sell} <i class="fa-solid fa-money-bill-1-wave" style="color:#e2f4e9;"></i> Valor de compra: ${data[0].value_buy} <i class="fa-solid fa-sack-dollar" style="color:color:#e2f4e9;"></i> ${data[0].date} </h6>
                
        `;
		barraDeCotizacion.appendChild(nuavaInfo);
		let nuavaInfo2 = document.createElement("div");
		nuavaInfo2.innerHTML = `
        
        <h6><span><i class="fa-solid fa-money-bill-1-wave" style="color:#e2f4e9;"></i></span> Dolar ${data[1].source} Valor de venta: ${data[1].value_sell} <i class="fa-solid fa-money-bill-1-wave" style="color:#e2f4e9;"></i> Valor de compra: ${data[1].value_buy} <i class="fa-solid fa-sack-dollar" style="color:#e2f4e9;"></i> ${data[1].date} </h6>

                
        `;
		barraDeCotizacion.appendChild(nuavaInfo2);
	});