
import Button from './Button';

const Header = ({onAddClick, showAdd}) => {

    return (
        <header className="header">
            <h1>Task Tracker</h1>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAddClick} />
        </header>
    )
}

export default Header
