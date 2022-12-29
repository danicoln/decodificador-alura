
	const entradaTexto = document.querySelector('.box-cod-decod');
	const msg = document.querySelector('.box-resultado');
	const saidaTexto = document.querySelector('.saida-texto');
	const botaoCopiar = document.querySelector('.copiar');



function buttonCodificar(){
	const textoCodificado = codificar(entradaTexto.value);
	if(textoCodificado == ""){
		alert("Por favor, insira o texto que será codificado!");
		return textoCodificado;
	}

	msg.value = textoCodificado;
	msg.style.background="none";
	msg.style.color="orange";
	saidaTexto.style.display="none";
	botaoCopiar.style.display='block';
}

function codificar(texto){
	let arrayCodigos = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o","ober"], ["u", "ufat"], ["aimes", "ai"]];

	texto = texto.toLowerCase();

	for(let i = 0; i < arrayCodigos.length; i++){
		if(texto.includes(arrayCodigos[i][0])){
			texto = texto.replaceAll(arrayCodigos[i][0], arrayCodigos[i][1]);
		}
	}

	return texto;
}

function buttonDecodificar(){
	const textoDecodificado = decodificar(msg.value);
	if(textoDecodificado ==""){
		alert("Por favor, insira o texto que será decodificado!");
		return textoDecodificado;
	}

	msg.value = textoDecodificado;
	msg.style.color="red";
	msg.style.fontSize='20px';
}

function decodificar(texto){
	let arrayCodigos = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o","ober"], ["u", "ufat"], ["aimes", "ai"]];

	texto = texto.toLowerCase();

	for(let i = 0; i < arrayCodigos.length; i++){
		if(texto.includes(arrayCodigos[i][1])){
			texto = texto.replaceAll(arrayCodigos[i][1], arrayCodigos[i][0]);
		}
	}

	return texto;
}

async function copiar(){
	msg.select();
	try{
		await navigator.clipboard.writeText(msg.value);
		console.log('Page URL coied to clipboard');
	}catch(erro){
		console.error('Falha ao copiar: ', erro);
	}
}

/*função de colar*/
async function getConteudoPrancheta(){
	try{
		const itensDaPrancheta = await navigator.clipboard.read();
		for(const item of itensDaPrancheta){
			for(const tipo of item.types){
				const blob = await item.getType(tipo);
				console.log(URL.createObjectURL(blob));
			}
		}
	}catch(erro){
		console.error(erro.name, erro.message);
	}
}

