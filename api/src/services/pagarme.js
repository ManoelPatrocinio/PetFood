const axios = requre("axios");

const api = axios.create({
  baseURL: "https://api.pagar.me/1",
});

//mover a key para o .env**************
const api_key = require("../data/keys.json").api_key;

module.exports = {
  createRecipient: async (name) => {
    try {
      const response = await api.post("/recipients", {
        api_key,
        bank_account: {
          bank_code: "341",
          agencia: "0932",
          agencia_dv: "5",
          conta: "58054",
          type: "conta_corrente",
          conta_dv: "1",
          document_number: "72163010000159",
          legal_name: name,
        },
        register_information: {
          type: "corporation",
          document_number: "72163010000159",
          company_name: name,
          email: "pedgree@email.com",
          site_url: "http://www.site.com",
          phone_numbers: [
            {
              ddd: "11",
              number: "85876199",
              type: "mobile",
            },
          ],
          managing_partners: [
            {
              type: "individual",
              document_number: "925452787",
              email: "some@email.com",
              name: "Someone",
            },
          ],
        },
      });
      return { error: false, data: response.data };
    } catch (error) {
      return { error: true, message: error.message };
    }
  },

  createSplitTransaction: async(data)=>{
    try {
      const response = await api.post("/transactions", {
        api_key,
        ...data,
      });
      return {error:false, data: response.data}
    } catch (error) {
      return {error: true, message: error.message}
    }
  }
};
