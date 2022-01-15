class ExulerCommon {
    public static CallApiPromised(url: string, data: any) {
        return new Promise<any>((resolve, reject) => {
            $.ajax({
                url: url,
                type: 'post',
                contentType: 'application/json; charset=utf-8',
                data: JSON.stringify(data),
                dataType: 'json',
                success: resolve,
                error: reject
            })
        });
    }
}