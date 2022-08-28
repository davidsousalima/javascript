programa
{
	
	funcao inicio()
	{
		real primeira_nota, segunda_nota, med
		cadeia nome 
		escreva("Qual é o nome do aluno? ")
		leia(nome)
		escreva("Primeira nota de ",nome,": ")
		leia(primeira_nota)
		escreva("Segunda nota de ",nome,": ")
		leia(segunda_nota)
		med = (primeira_nota + segunda_nota)/2
		se(med >= 6){
			escreva("\nANALISANDO A SITUAÇÂO DE ",nome)
			escreva("\nCom as notas ",primeira_nota," e ",segunda_nota,", a MÉDIA é ",med)
			escreva("\nA média acima de 6,0 o aluno esta APROVADO ")
		}senao{
			se(med >=3 e med < 6){
				escreva("\nANALISANDO A SITUAÇÂO DE ",nome)
				escreva("\nCom as notas ",primeira_nota," e ",segunda_nota,", a MÉDIA é ",med)
				escreva("\nCom a Média entre 3,0 e 6,0 o aluno esta em RECUPERAÇÂO")
			}senao{
				escreva("\nANALISANDO A SITUAÇÂO DE ",nome)
				escreva("\nCom as notas ",primeira_nota," e ",segunda_nota,", a MÉDIA é ",med)
				escreva("\nCom a media abaixo de 6,0 o aluno esta REPROVADO")
			}
		}
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 912; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */