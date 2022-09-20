const AnimalController = {


  mammals: async (req, res) => {
    const animals = [
      "dog",
      "cat",
      "whale"
    ]

    res.json(animals)

  }

}

module.exports = AnimalController;
