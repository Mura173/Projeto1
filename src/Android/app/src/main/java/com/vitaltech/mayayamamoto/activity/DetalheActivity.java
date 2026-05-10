package com.vitaltech.mayayamamoto.activity;

import android.content.Intent;
import android.os.Bundle;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

import com.bumptech.glide.Glide;
import com.vitaltech.mayayamamoto.R;
import com.vitaltech.mayayamamoto.model.Exercicios;

public class DetalheActivity extends AppCompatActivity {
    ImageView img;
    TextView nome, observacao;
    Button btVoltar;

    int index = 0;
    ImageView imgArrowRight, imgArrowLeft;

    Intent intent;

    Exercicios ex;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_detalhes);

        img = findViewById(R.id.imgExercicio);
        imgArrowRight = findViewById(R.id.imgArrowRight);
        imgArrowLeft = findViewById(R.id.imgArrowLeft);

        nome = findViewById(R.id.txtNomeExercicio);
        observacao = findViewById(R.id.txtObservacao);
        btVoltar = findViewById(R.id.btVoltar);

        String nomeRecebido = getIntent().getStringExtra("nome");
        String orientacaoRecebida = getIntent().getStringExtra("orientacoes");
        String imagemRecebida = getIntent().getStringExtra("imagem");

        nome.setText(nomeRecebido);
        observacao.setText(orientacaoRecebida);

        Glide.with(this)
                .load(imagemRecebida)
                .into(img);

        /* imgArrowRight.setOnClickListener(v -> {
            index++;

            if(index >= imagens.length){
                index=0;
            }

            img.setImageResource(imagens[index]);
        }); */

        /*imgArrowLeft.setOnClickListener(v -> {
            index--;

            if (index <= imagens.length){
                index = 0;
            }

            img.setImageResource(imagens[index]);
        }); */

        btVoltar.setOnClickListener( v-> {
            intent = new Intent(DetalheActivity.this, TrilhaExerciciosActivity.class);
            startActivity(intent);
        });
    }


}
