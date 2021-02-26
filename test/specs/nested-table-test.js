describe('bug', () => {
    it('selects theader row instead of tbody row', () => {
        browser.url(`http://localhost:8081`);

        /* 
        I expect this combination of selectors to return the 
        the first row of the inner table <tbody>.

        Instead, it returns the first row of the inner
        table <thead>.
        */
        const innerTablerow = $('#inner-table').$('tbody tr')
        expect(innerTablerow.getText())
            .toEqual('inner-table-first-row-cell')
    });
});