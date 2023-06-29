//namespacing
//criar uma variável de nome menor para referir a algo de nome maior
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint


//variaveis
var engine;
var world;


function setup() {
    createCanvas(500, 700);
    //cria o motor
    engine = Engine.create();
    world = engine.world;



    //cria corpo retangular
    //adiciona no mundo

    //criar um objeto da classe Bola


}


function draw() {
    background("cyan");    
    //atualiza o motor
    Engine.update(engine);

    //pinta o solo
    fill("green")


   
}