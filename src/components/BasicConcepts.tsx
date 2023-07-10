import { useState } from 'react';
import Alert from './Alert';
import Button from './Button';
import ListGroup from './ListGroup';
import ListGroupWithStyledComponent from './ListGroupWithStyledComponent';
import Icon from './Icon';
import ButtonWithModuleCSS from './ButtonWithModuleCSS/ButtonWithModuleCSS';
import Like from './Like';

const BasicConcepts = () => {
    const [showHideAlert, setShowHideAlert] = useState(false);

    const cities: any = ["Bengaluru", "New Delhi", "Mumbai"],
        colors: any = ["Red", "Green", "Yellow"];

    const handleSelectItem = (item: string) => {
        console.log(item);
    }
    return <div>
        {showHideAlert && <Alert onClose={() => setShowHideAlert(false)}>
            Hello <span>World</span>
        </Alert>}
        <div>
            <ListGroup items={cities} heading='Cities' onSelectItem={handleSelectItem} />
            <ListGroup items={colors} heading='Colors' onSelectItem={handleSelectItem} />
        </div>
        <Button onButtonClick={() => setShowHideAlert(true)}>Submit</Button>
        <ListGroupWithStyledComponent items={cities} heading='Cities' onSelectItem={handleSelectItem}></ListGroupWithStyledComponent>
        <Icon></Icon>
        <ButtonWithModuleCSS></ButtonWithModuleCSS>
        <Like onLike={() => console.log('Liked')}></Like>
    </div>
}

export default BasicConcepts