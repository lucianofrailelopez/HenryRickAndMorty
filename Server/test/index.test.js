const app = require('../src/app');
const session = require('supertest');
const agent = session(app);

describe("Test de RUTAS", () => {
    describe("GET /rickandmorty/character/:id", () => {
        it("Responde con status: 200", async () => {
            await agent.get('/rickandmorty/character/1').expect(200);
        });
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
            const response = (await agent.get('/rickandmorty/character/1')).body;
            expect(response).toHaveProperty("id");
            expect(response).toHaveProperty("name");
            expect(response).toHaveProperty("species");
            expect(response).toHaveProperty("gender");
            expect(response).toHaveProperty("status");
            expect(response).toHaveProperty("origin");
            expect(response).toHaveProperty("image");
        });
        it('Si hay un error responde con status: 500', async () => {
            await agent.get('/rickandmorty/character/1729').expect(500);
        });
    })
    describe("GET /rickandmorty/login", () => {
        it("Responde un objeto con la propiedad: access = true", async () => {
            const response = (await agent.get('/rickandmorty/login?email=ejemplo@ejemplo.com&password=unaPass1')).body;
            expect(response.access).toEqual(true);
        });
    
        it("Responde un objeto con la propiedad: access = false", async () => {
            const response = (await agent.get('/rickandmorty/login?email=ejemplo@gmail.com&password=unaPassword1')).body;
            expect(response.access).toEqual(false);
        });
    })

    describe("Favorites", () => {
        const char1 = { id: 1, name: "Messi"};
        const char2 = { id: 2, name: "Ronaldo"}

        describe("POST /rickandmorty/fav", () => {
        const char1 = { id: 1, name: "Messi"};
        const char2 = { id: 2, name: "Ronaldo"}

        it("Post should add the character to the favs", async () => {
            const response = await agent.post("/rickandmorty/fav").send(char1);
            expect(response.body).toContainEqual(char1);
        })
        it("Post should add the second character to the favs", async () => {
            const response = await agent.post("/rickandmorty/fav").send(char2);
            expect(response.body.length).toBe(2);
            expect(response.body).toContainEqual(char1);
            expect(response.body).toContainEqual(char2);
        })
        })

        describe("DELETE /rickandmorty/fav/:id", () => {
            it("Should return the previous characters when sending wrong data", async () => {
                const response = await agent.delete("/rickandmorty/fav/68")
                expect(response.body).toContainEqual(char1);
                expect(response.body).toContainEqual(char2);
            });
            it("Should delete the character when sending correct information", async () => {
                const response = await agent.delete("/rickandmorty/fav/2");
                expect(response.body).toContainEqual(char1);
                expect(response.body).not.toContainEqual(char2);
            })
        })
    })
})