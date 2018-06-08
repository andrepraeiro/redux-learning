export function changeValue(e) {
    console.log('changevalue')
    return  {
        type: 'VALUE_CHANGED',
        payload: e.target.value
    }
}