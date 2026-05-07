package com.vitaltech.mayayamamoto.activity;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.widget.TextView;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.vitaltech.mayayamamoto.adapter.ExercicioAdapter;
import com.vitaltech.mayayamamoto.model.Exercicios;
import com.vitaltech.mayayamamoto.R;
import com.vitaltech.mayayamamoto.model.ExerciseResponse;
import com.vitaltech.mayayamamoto.network.ApiService;
import com.vitaltech.mayayamamoto.network.RetrofitClient;

import java.util.ArrayList;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class TrilhaExerciciosActivity extends AppCompatActivity {
    RecyclerView recycler;
    TextView txtOla;
    Intent intent;

    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_trilha_exercicios);

        recycler = findViewById(R.id.recyclerExercicios);

        ArrayList<Exercicios> lista = new ArrayList<>();

        ExercicioAdapter adapter = new ExercicioAdapter(this, lista);

        recycler.setLayoutManager(new LinearLayoutManager(this));
        recycler.setAdapter(adapter);

        txtOla = findViewById(R.id.txtOla);

        buscarExercicios();

    }

    private void buscarExercicios(){
        ApiService api = RetrofitClient.getRetrofit().create(ApiService.class);

        api.listarExercicios().enqueue(new Callback<ExerciseResponse>() {
            @Override
            public void onResponse(Call<ExerciseResponse> call, Response<ExerciseResponse> response) {
                if(response.isSuccessful() && response.body() != null) {
                    ArrayList<Exercicios> lista = new ArrayList<>(response.body().getData());
                    ExercicioAdapter adapter = new ExercicioAdapter(TrilhaExerciciosActivity.this, lista);

                    recycler.setAdapter(adapter);
                }
            }

            @Override
            public void onFailure(Call<ExerciseResponse> call, Throwable t) {
                Log.e("API", t.getMessage());
            }
        });
    }
}
