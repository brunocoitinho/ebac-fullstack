namespace casting{
    let idade:any = 10;
    (idade as number).toFixed();
    (idade as string).length;
    (idade as string[]).forEach(i => console.log(i) ); // Erro em tempo de execução

    let nome : string = 35 as unknown as string; // Evitar esse tipo de casting
    let nome2 = (35).toString(); // Maneira correta de converter número para string
}
