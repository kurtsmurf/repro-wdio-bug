describe('bug', () => {
    it('selects theader row instead of tbody row', () => {
        browser.url(`http://localhost:8081`);

        // I expect this combination of selectors to return the 
        // the first body row of the inner table.
        // Instead, it returns the first head row of the inner
        // table.
        const innerTablerow = $('#inner-table').$('tbody tr')
        expect(innerTablerow.getText())
            .toEqual('inner-table-first-row-cell')
    });
});