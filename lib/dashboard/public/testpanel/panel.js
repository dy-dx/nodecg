$(function () {
    $('#extv-lowerthird_in').click(function () { nodecg.sendMessage('lowerthirdIn', updateData()); });
    $('#extv-lowerthird_out').click(function () { nodecg.sendMessage('lowerthirdOut', ''); });
    $('#extv-lowerthird_pulse7').click(function () { nodecg.sendMessage('lowerthirdPulse', pulse(7)); });
    $('#extv-lowerthird_pulse15').click(function () { nodecg.sendMessage('lowerthirdPulse', pulse(15)); });
    $('#extv-lowerthird_pulse30').click(function () { nodecg.sendMessage('lowerthirdPulse', pulse(30)); });

    function updateData() {
        return {
            'title': $('#extv-lowerthird_title').val(),
            'body': $('#extv-lowerthird_body').val()
        };
    }

    function pulse(duration) {
        var msg = updateData();
        msg.duration = duration;
        return msg;
    }
});
