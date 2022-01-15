"use strict";
class ExulerCommon {
    static CallApiPromised(url, data) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: url,
                type: 'post',
                contentType: 'application/json; charset=utf-8',
                data: JSON.stringify(data),
                dataType: 'json',
                success: resolve,
                error: reject
            });
        });
    }
}
