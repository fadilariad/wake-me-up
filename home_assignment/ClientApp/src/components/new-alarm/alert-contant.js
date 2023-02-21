export const INIT_ALERT_STATE = {
    show: false,
    content: '',
    type: '',
    link: ''
};

export const SERVER_ERROR_GENERAL = {
    show: true,
    content: 'Something wrong!! try later',
    type: 'danger',
    link: ``
};

export const REQUIRE_FIELD_ERROR = {
    show: true,
    content: 'Name and date required!!',
    type: 'danger',
    link: ''
};

export const SUCCESS_ADD_NEW_ALARM = (id) => {
    return {
        show: true,
        content: 'Event added successfully',
        type: 'success',
        link: `/alarm/${id}`
    }
};

