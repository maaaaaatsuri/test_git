const Example = () => {
    const title = 'Expression';
    const array = ['item1', 'item2', 'item3'];
    const fn = (arg) => {
        return `${arg} Function`;
    };
    const upperCaseText = 'UpperCaseText';
    const jsx = <h3>Hello JSX</h3>;
    return (
        <div className={upperCaseText.toLowerCase()}>
            <h3>{title}</h3>
            <h3>{array}</h3>
            <h3>{fn('Hello')}</h3>
            {jsx}
            {<h3>Hello JSX</h3>}
        </div>
    );
};
 
export default Example;
