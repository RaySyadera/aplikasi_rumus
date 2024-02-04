function luasKelilingLingkaran(r){

	const pi = 3.14;
	
	let luas = pi*r**2;
    let kel = 2*pi*r;
	
	console.log("Jari-jari lingkaran:", r, "cm");
  console.log("Jadi luas lingkaran : ",luas, "dan kelilingnya : ",kel);
}

luasKelilingLingkaran(10);
