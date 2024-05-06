export function formatarCNPJ(cnpj: string) {
  cnpj = cnpj.replace(/\D/g, "");

  if (cnpj.length !== 14) {
    return cnpj;
  }

  const cnpjFormatado = `${cnpj.substring(0, 2)}.${cnpj.substring(
    2,
    5
  )}.${cnpj.substring(5, 8)}/${cnpj.substring(8, 12)}-${cnpj.substring(12)}`;

  return cnpjFormatado;
}

export function formatarTelefone(telefone: string) {
  telefone = telefone.replace(/\D/g, "");

  const ddi = telefone.substring(0, 2);
  const ddd = telefone.substring(2, 4);
  const numeroLocal = telefone.substring(4);

  const telefoneFormatado = `+${ddi} (${ddd}) ${numeroLocal.substring(
    0,
    5
  )}-${numeroLocal.substring(5)}`;

  return telefoneFormatado;
}

export function formatterNao(palavra: string) {
  if (palavra === "nao" || palavra === "Nao") {
    return "Não";
  }

  return palavra;
}

export function formatarCPF(cpf: string) {
  cpf = cpf.replace(/[^0-9]/g, "");

  if (cpf.length === 11) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  } else {
    return cpf;
  }
}

export function acentuarPalavra(palavra: string) {
  let palavraComAcento = "";

  if (palavra === "MAE") {
    palavraComAcento = "MÃE";
    return palavraComAcento;
  } else if (palavra === "SOCIO(A)") {
    palavraComAcento = "SÓCIO(A)";
    return palavraComAcento;
  } else if (palavra === "IRMAO(A)") {
    palavraComAcento = "IRMÃO(A)";
    return palavraComAcento;
  }

  return palavra;
}

export function capitalizeWords(str: string) {
  return str.replace(/\b[a-z]/g, function (char: string) {
    return char.toUpperCase();
  });
}
