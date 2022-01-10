// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderBunny } from '../render-utils.js';

const test = QUnit.test;

test('Should display new bunny', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderBunny('bunny');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.innerHTML, expected);
});
