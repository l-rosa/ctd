// Grupo 6
// Lucas Rosa
// Silvanio Aparecido Saldanha
// Angelica Lirio
// Pedro Pinheiro
// Rafael Mike de Oliveira Saldanha
// Angel Ontiveros

public class Main {

    public static void main (String args[]){

        UsuarioJogo Player1 = new UsuarioJogo("Jose", "Jplayer");

        Player1.setNivel(4);
        System.out.println(Player1.getNivel());

        Player1.setPontuacao(30);
        System.out.println(Player1.getPontuacao());

        UsuarioJogo Player2 = new UsuarioJogo("Maria", "Mplayer");

        Player2.setNivel(8);
        System.out.println(Player2.getNivel());

        Player2.setPontuacao(60);
        System.out.println(Player2.getPontuacao());

        //Testes dos métodos:

        Player1.aumentarPontuacao(1);
        //System.out.println(Player1.getPontuacao());
        Player1.subirNivel();
        //System.out.println(Player1.getNivel());
        Player1.bonus(5);


    }
}
