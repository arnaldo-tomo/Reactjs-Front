import java.Util.Scanner;
public class tabuada{
    public Static void Main(String [] Args){
    int valorUsuario;
    int multiplicador = 0;
    int total = 0;


    Scanner ler = new Scanner(System.in);
    System.out.println("Informe um número: ");
    valorUsuario = ler.nextInt();

    for (int x = 0; x < 10; x++) {
            total = valorUsuario * ++multiplicador;
            System.out.println(valorUsuario + " x " + multiplicador + " = " + total);
        }

    }
    }
}

..................................................

public static void main (String[] args){
		for (int i = 0; i<=10; i++){
			for (int j = 0; j<=10; j++){
				System.out.println (i+" x "+ j + " = " + i*j);
			}
		}
	}

..................................................


    for (int i = 1; i<=10; i++){ 
        System.out.println ("Tabuada do: "+i);
         for (int j = 1; j<=10; j++) 
         System.out.println (i+" x "+j+" = "+ i*j); }



..................................................




         	int contador = 1;
	int numeroDigitado;
	
	System.out.println("digite o valor da tabuada:");
		numeroDigitado = input.nextInt();
	while (contador <=10){
		System.out.println(numeroDigitado+" X "+contador+" = "+contador * numeroDigitado);
		contador ++;
	}

}

..................................................

import java.util.Scanner;

public class TabuadaDe1A10 {

    public static void main(String[] args) {

        int fator, i, multiplicacao;

        System.out.print("Digite o valor do fator: ");
        fator = in.nextInt();
        in.nextLine();

        for (i=1; i<=10; i++) {
            System.out.print("PROCESSO " + i);
            multiplicacao=fator*i;
            System.out.println("O valor do multiplicacao: " + multiplicacao);
        }
    }

}