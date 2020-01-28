describe("Routes: Clients", () => {
    const defaultClients = {
        name: "Default Client Name",
        origin: "Elo7",
        birthDate: "22/03/1986",
        cellPhone: "(21)96883-6199"
    };

    describe("GET /clients", () => {
        it("should return a list of products", done => {
            request.get("/clients").end((err, res) => {
                expect(res.body[0]).to.eql(defaultClients);
                done(err);
            });
        });
    });
});
