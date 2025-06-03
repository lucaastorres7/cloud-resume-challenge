describe("Test API visitorCounter", () => {
  const api_url = "https://api.lucastorres.cloud/saveValueToDDBTable";

  it("1. Update counter and confirm DB update", () => {
    cy.request("POST", api_url).then((firstResponse) => {
      expect(firstResponse.status).to.eq(200);
      expect(firstResponse.body).to.have.property("visitorCounter");
      const firstCount = firstResponse.body.visitorCounter;

      cy.request("POST", api_url).then((secondResponse) => {
        expect(secondResponse.status).to.eq(200);
        expect(secondResponse.body).to.have.property("visitorCounter");
        const secondCount = secondResponse.body.visitorCounter;
        expect(secondCount).to.eq(firstCount + 1);
      });
    });
  });
});
