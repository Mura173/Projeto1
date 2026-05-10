package com.vitaltech.mayayamamoto.model;

import com.google.gson.annotations.SerializedName;

import java.util.ArrayList;

public class Exercicios {

    private int id_exercicio;
    private String titulo;
    private String descricao;
    private String orientacoes;
    private String imagemUrl;

    public int getId_exercicio() {
        return id_exercicio;
    }

    public String getTitulo() {
        return titulo;
    }

    public String getDescricao() {
        return descricao;
    }

    public String getOrientacoes() {
        return orientacoes;
    }

    public String getImagemUrl() {
        return imagemUrl;
    }

    private ArrayList<ImagemExercicio> imagens_exercicios;

    public ArrayList<ImagemExercicio> getImagens_exercicios() {
        return imagens_exercicios;
    }

    public void setImagens_exercicios(ArrayList<ImagemExercicio> imagens_exercicios) {
        this.imagens_exercicios = imagens_exercicios;
    }
}
