const petData = [
    // Valid data - positive test case
    {
      id: 12345,
      category: {
        id: 1,
        name: "Dogs"
      },
      name: "Rex",
      photoUrls: ["https://example.com/rex.jpg"],
      tags: [{ id: 0, name: "dog" }],
      status: "available",
      testTags: ["create","find","update","delete"]
    },
  
    // Valid data - another positive test case
    {
      id: 12346,
      category: {
        id: 2,
        name: "Cats"
      },
      name: "Whiskers",
      photoUrls: ["https://example.com/whiskers.jpg"],
      tags: [{ id: 1, name: "cat" }],
      status: "available",
      testTags: ["create","find","update","delete"]
    },
  
    // Invalid data - missing required field 'name'
    {
      id: 12347,
      category: {
        id: 3,
        name: "Birds"
      },
      // name is missing here to trigger validation error
      photoUrls: ["https://example.com/tweety.jpg"],
      tags: [{ id: 2, name: "bird" }],
      status: "available",
      testTags: ["delete"]
    },
  
    // Invalid data - invalid status value
    {
      id: 12348,
      category: {
        id: 4,
        name: "Fish"
      },
      name: "Goldie",
      photoUrls: ["https://example.com/goldie.jpg"],
      tags: [{ id: 3, name: "fish" }],
      status: "not-a-valid-status",
      testTags: ["create","find","update","delete"]
    },
  
    // Invalid data - missing photoUrls (required field)
    {
      id: 12349,
      category: {
        id: 5,
        name: "Slinky"
      },
      name: "Slinky",
      tags: [{ id: 4, name: "reptile" }],
      status: "available",
      testTags: ["find","update","delete"]
    },
  
    // Invalid data - ID is a string instead of a number
    {
      id: "invalid-id",  // ID should be a number
      category: {
        id: 6,
        name: "Hamsters"
      },
      name: "Hammy",
      photoUrls: ["https://example.com/hammy.jpg"],
      tags: [{ id: 5, name: "hamster" }],
      status: "available",
      testTags: ["create","find","update","delete"]
    },
  
    // Invalid data - Empty object
    {
      testTags: ["find","update","delete"]
    }
  ];
  
  export default petData;
  