import React, {useEffect, useState} from "react";

const Status = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [statusValue, setStatusValue] = useState(props.status)

    useEffect(() => {
        props.getStatus(props.userId);
        if (statusValue !== props.status) {
            setStatusValue(props.status);
        }
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false)

        if (props.status !== statusValue) {
            props.updateStatus(statusValue)
        }
    }

    const changeStatusValue = e => {
        setStatusValue(e.target.value);
    }

    return (
        <div className="status">
            <p>
                {
                    editMode
                        ? <input
                            autoFocus={true}
                            onBlur={deactivateEditMode}
                            type="text"
                            placeholder="Статус"
                            value={statusValue}
                            onChange={changeStatusValue}
                        />
                        : <span
                            onClick={activateEditMode}
                            className="status_value"
                        >
                        {props.status || 'Редактировать статуc'}
                    </span>
                }
            </p>
        </div>
    )
}

export default Status;