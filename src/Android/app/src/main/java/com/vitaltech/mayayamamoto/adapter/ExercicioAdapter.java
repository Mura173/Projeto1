package com.vitaltech.mayayamamoto.adapter;

import android.content.Context;
import android.content.Intent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.Glide;
import com.vitaltech.mayayamamoto.model.Exercicios;
import com.vitaltech.mayayamamoto.R;
import com.vitaltech.mayayamamoto.activity.DetalheActivity;

import java.util.ArrayList;

public class ExercicioAdapter extends RecyclerView.Adapter<ExercicioAdapter.ViewHolder> {

    // Contem todos os exercicios que serao exibidos, armazenados em uma lista
    ArrayList<Exercicios> lista;
    // Acessar recursos do android
    Context context;

    public ExercicioAdapter(Context context, ArrayList<Exercicios> lista) {
        this.context = context;
        this.lista = lista;
    }

    // Celula da lista
    public static class ViewHolder extends RecyclerView.ViewHolder {
        TextView txtNome, txtDescricao;
        ImageView imgExercicio;

        public ViewHolder(View itemView) {
            super(itemView);
            txtNome = itemView.findViewById(R.id.txtNome);
            txtDescricao = itemView.findViewById(R.id.txtDescricao);
            imgExercicio = itemView.findViewById(R.id.imgExercicio);
        }
    }

    // Cria a View da celula
    @Override
    public ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(context).inflate(R.layout.item_exercicios, parent, false);
        return new ViewHolder(view);
    }

    // Liga os dados do objeto com os elementos da celula
    @Override
    public void onBindViewHolder(ViewHolder holder, int position) {
        Exercicios ex = lista.get(position);

        holder.txtNome.setText(ex.getTitulo());
        holder.txtDescricao.setText(ex.getDescricao());

        String imagemUrl = "";

        if(ex.getImagens_exercicios() != null &&
                !ex.getImagens_exercicios().isEmpty()){

            imagemUrl =
                    ex.getImagens_exercicios()
                            .get(0)
                            .getLink_imagem();
        }

        final String finalImagemUrl = imagemUrl;

        Glide.with(context)
                .load(finalImagemUrl)
                .into(holder.imgExercicio);

        holder.itemView.setOnClickListener(v -> {

            Intent intent = new Intent(context, DetalheActivity.class);

            intent.putExtra("nome", ex.getTitulo());
            intent.putExtra("descricao", ex.getDescricao());
            intent.putExtra("orientacoes", ex.getOrientacoes());

            ArrayList<String> imagens = new ArrayList<>();

            if(ex.getImagens_exercicios() != null){

                for(int i = 0; i < ex.getImagens_exercicios().size(); i++){

                    imagens.add(
                            ex.getImagens_exercicios()
                                    .get(i)
                                    .getLink_imagem()
                    );
                }
            }

            intent.putStringArrayListExtra("imagens", imagens);

            context.startActivity(intent);
        });
    }

    // Informa pro RecyclerView quantos itens existem na lista
    @Override
    public int getItemCount() {
        return lista.size();
    }
}
