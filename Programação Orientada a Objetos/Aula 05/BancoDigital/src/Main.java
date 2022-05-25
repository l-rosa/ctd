public class Main {
    public static void main(String args[]) {
        //Criando o Objeto conforme construtor Cliente


        Cliente cliente1 = new Cliente( 7145236, "Cliente top" );

        cliente1.setDivida(45.00);

        System.out.println(cliente1.getDivida());

        cliente1.aumentarDivida(8000);
        cliente1.pagarDivida(1000);
    }
}

