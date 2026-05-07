package com.vitaltech.mayayamamoto.model;

import com.google.gson.annotations.SerializedName;

public class Exercicios {

    private int id_exercicio;
    private String titulo;
    private String descricao;
    private String orientacoes;
    private int imgExercicio;

    public int getId_exercicio(){
        return id_exercicio;
    }

    public String getTitulo(){
        return titulo;
    }

    public String getDescricao() {
        return descricao;
    }

    public String getOrientacoes(){
        return orientacoes;
    }

    public int getImgExercicio(){
        return imgExercicio;
    }
}
