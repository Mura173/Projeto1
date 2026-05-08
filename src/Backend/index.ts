import express from "express";
import {
  BuscarPaciente,
  ListarPacientes,
  ValidarCadastroPaciente,
  ValidarLoginUsuario,
} from "./controller/controller_usuarios.ts";
import { validarCadastroExercicio, listarExercicios, removerExercicio } from "./controller/controller_exercicios.ts";
import { validarAvaliacao, validarOrientacao, validarQueixa, validarSinal, validarPrescricao } from "./controller/controller_prontuarios.ts";

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    res.sendStatus(200);
    return;
  }

  next();
});

/**************Rotas************** */

/****************Pacientes****************** */
app.post("/cadastrarPaciente", async (req, res) => {
  let data = req.body;

  let cadastrarPaciente = await ValidarCadastroPaciente(data);

  res.status(cadastrarPaciente.status);
  res.json(cadastrarPaciente);
});

app.post("/login", async (req, res) => {
  let email = req.body.email;
  let senha = req.body.senha;

  let login = await ValidarLoginUsuario(email, senha);

  res.status(login.status_code);
  res.json(login);
});


app.get("/paciente/:id", async (req, res) => {
  const id = Number(req.params.id)

  let paciente = await BuscarPaciente(id)

  res.status(paciente.status);
  res.json(paciente);
});

app.get("/pacientes", async (_req, res) => {
  let pacientes = await ListarPacientes()

  res.status(pacientes.status);
  res.json(pacientes);
});

/****************Exercícios****************** */
app.post("/cadastrarExercicio", async (req, res) => {
  let data = req.body;

  let cadastrarExercicio = await validarCadastroExercicio(data);

  res.status(cadastrarExercicio.status);
  res.json(cadastrarExercicio);
});

app.get("/listarExercicios", async (_req, res) => {
  let resultado = await listarExercicios();

  res.status(resultado.status);
  res.json(resultado);
});

app.delete("/exercicio/:id", async (req, res) => {
  const id = Number(req.params.id);
  const { email, senha } = req.body;

  try {
    let resultado = await removerExercicio(id, email, senha);
    res.status(resultado.status);
    res.json(resultado);
  } catch (error) {
    console.log("Erro ao deletar exercício:", error);
    res.status(500).json({ message: String(error) });
  }
});

/*******************Prontuarios******************* */
app.post("/adicionarOrientacao/:id", async (req, res) => {
  const id_paciente = Number(req.params.id);
  const { orientacao } = req.body;

  let novaOrientacao = await validarOrientacao(id_paciente, orientacao);

  res.status(novaOrientacao.status);
  res.json(novaOrientacao);
});

app.post("/adicionarQueixa/:id", async (req, res) => {
  const id_paciente = Number(req.params.id);
  const { queixa } = req.body;

  let novaQueixa = await validarQueixa(id_paciente, queixa);

  res.status(novaQueixa.status);
  res.json(novaQueixa);
});

app.post("/adicionarSinal/:id", async (req, res) => {
  const id_paciente = Number(req.params.id);
  const { sinal, escala } = req.body;

  let novoSinal = await validarSinal(id_paciente, sinal, escala);

  res.status(novoSinal.status);
  res.json(novoSinal);
});

app.post("/adicionarAvaliacao/:id", async (req, res) => {
  const id_paciente = Number(req.params.id);
  const { avaliacao } = req.body;

  let novaAvaliacao = await validarAvaliacao(id_paciente, avaliacao);

  res.status(novaAvaliacao.status);
  res.json(novaAvaliacao);
});

app.post("/prescreverExercicio/:id", async (req, res) => {
  const id_paciente = Number(req.params.id);
  const { id_exercicio } = req.body;

  const resultado = await validarPrescricao(id_paciente, id_exercicio);

  res.status(resultado.status);
  res.json(resultado);
});

app.listen(5000, () => {
  console.log("Servidor rodando na porta 5000");
});
