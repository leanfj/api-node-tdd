import ClientsController from "../../../src/controllers/clients";

import sinon from "sinon";

describe("Controllers: Clients", () => {
    const defaultClient = [
        {
            name: "Default Client Name",
            origin: "Elo7",
            birthDate: "22/03/1986",
            cellPhone: "(21)96883-6199"
        }
    ];

    describe("get() clients", () => {
        it("should return a list of clients", () => {
            const request = {};
            const response = {
                send: sinon.spy()
            };

            const clientsController = new ClientsController();
            clientsController.get(request, response);

            expect(response.send.called).to.be.true;
            expect(response.send.calledWith(defaultClient)).to.be.true;
        });
    });
});
