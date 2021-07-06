const Petshop = require("../models/petshop");
const Product = require("../models/product");
const petshopsInfos = require("./petfood.json");
const createRecipient = require("../services/pagarme").createRecipient;
require("../data/database");

// add os petshops e produtos do arquivo petfood.json no BD
const addPetshopAndProduct = async () => {
  try {
    //percorre o arquivo e insere cada petshop por vez na variavel petshop
    for (let petshop of petshopsInfos) {
      const recipient = await new Petshop(petshop.nome).save();

      if (!recipient.error) {
        const newPetshop = await new Petshop({
          ...petshop,
          recipient_id: recipient.data.id,
        }).save(); // inseri as petshops no bd
        await Product.insertMany(
          petshop.produtos.map((p) => ({ ...p, petshop_id: newPetshop._id })) //inseri o id da petshop no registo do produto
        );
      } else {
        console.log(recipiente.message);
      }
    }

    console.log("final do script: addPetshopAndProduct");
  } catch (error) {
    console.log(error.message);
  }
};

addPetshopAndProduct();
