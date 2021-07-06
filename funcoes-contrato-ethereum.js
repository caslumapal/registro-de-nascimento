async function obterDadosDoRegistro() {
  let contractNumberField = document.getElementById("contractNumber");
  const userInput = contractNumberField.value * 1;
  alert("valorInformadoPeloUsuario: " + userInput);
  try {
    const arrayDadosNascimento = await smartContract.Nascimento(userInput);
    console.log(arrayDadosNascimento);
    document.getElementById("genitor").innerText = arrayDadosNascimento[0];
    document.getElementById("genitora").innerText = arrayDadosNascimento[1];
    document.getElementById("nomeCrianca").innerText = arrayDadosNascimento[2];
    document.getElementById("dataDeNascimento").innerText = arrayDadosNascimento[3];
  } catch (err) {
    console.error(err);
    document.getElementById("genitor").innerText = "";
    document.getElementById("genitora").innerText = "";
    document.getElementById("nomeCrianca").innerText = "";
    document.getElementById("dataDeNascimento").innerText = "";
    contractNumberField.value = 0;
    alert("Houve um erro ao buscar o Registro de Nascimento nº: " + userInput);
  }
}

async function autoLoadOwner() {
  try {
    const contractOwner = await smartContract.registrador();
    console.log(contractOwner);
    document.getElementById("spanOwner").innerText = contractOwner;
  } catch (err) {
    console.error(err);
    alert("Houve um erro ao buscar o Registrador");
  }
}

async function saveFormData() {
  try {
    var tx;
    var txReceipt;
    tx = await smartContractWithSigner.RegistrarNascimento(
      document.frmNascimento.paramGenitor.value,
      document.frmNascimento.paramGenitora.value,
      document.frmNascimento.paramNomeCrianca.value,
      document.frmNascimento.paramdataDeNascimento.value
    );
    console.log("transacao enviada ao metamask. pendente...", tx);
    alert("Transação enviada... " + tx.hash + " aguarde a confirmação da Blockcnain...");
    txReceipt = await tx.wait();
    console.log("transacao processada...", txReceipt);
    if (txReceipt.status == 1) {
      alert("Transação processada: " + tx.hash + "  - Registro salvo na Blockchain. Status: " + txReceipt.status);
    } else {
      alert("Transação processada: " + tx.hash + "  - Mas houve um erro na blockchain. Veja pelo etherscan");
    }
  } catch (err) {
    console.error(err);
    alert("Houve um erro ao salvar o Registro de Nascimento na Blockchain");
  }
}
