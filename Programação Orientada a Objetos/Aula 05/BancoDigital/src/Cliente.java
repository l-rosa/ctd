public class Cliente {
    private int numeroCliente;
    private String nome;
    private double divida;

    public Cliente(int numero, String nome) {
        this.numeroCliente = numero;
        this.nome = nome;
        this.divida = 10;
    }

    public double getDivida() {
        return this.divida;
    }

    public void setDivida(double divida) {
        this.divida = divida;
    }

    public void aumentarDivida(double valor) {

        if (valor <= 0) {
            System.out.println("Você inseriu um valor errado");
        } else {
            this.divida += valor;
            System.out.println("Sua divida e de " + this.divida);
        }
    }

    public void pagarDivida(double valor) {
        if (this.divida == 0) {
            System.out.println("Você não tem Dívida");
        } else {
            this.divida -= valor;
            System.out.println("Sua divida e de " + this.divida);
        }

    }
}
