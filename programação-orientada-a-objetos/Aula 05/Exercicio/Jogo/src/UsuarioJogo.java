public class UsuarioJogo {
    private String nome;
    private String nickname;
    private int pontuacao;
    private int nivel;

    public UsuarioJogo(String nome, String nickname){
        this.nome = nome;
        this.nickname = nickname;
        this.pontuacao = 0;
        this.nivel = 1;
    }

    public void setPontuacao (int Pontuacao){
        this.pontuacao = Pontuacao;
    }

    public int getPontuacao (){
        return this.pontuacao;
    }

    public void setNivel (int Nivel){
        this.nivel = Nivel;
    }

    public int getNivel (){
        return this.nivel;
    }

    public void aumentarPontuacao(int valor){
        if (valor>0){
            this.pontuacao += valor;
        }
        System.out.println("Nova Pontuacao e "+this.pontuacao);
    }

    public void subirNivel(){
        this.nivel++;
        System.out.println("Parabens, voce subiu de nivel. Atual "+this.nivel);
    }

    public void bonus(int bonus){
        if (bonus>0){
            this.pontuacao += bonus;
        }
        System.out.println("Voce Recebeu um BONUS!! Nova Pontuacao e "+this.pontuacao);
    }

}
