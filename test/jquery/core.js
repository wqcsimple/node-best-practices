/**
 * 基于jquery的一些方法封装
 * @author whis admin@wwhis.com
 * @Created 11/7/18
 */

var Core = Core ? Core : {};

Core.NET = (function () {
    function post(action, data, success, fail) {
        data = data ? data : {};
        $.ajax({
            url: action,
            type: "POST",
            dataType: "json",
            data: data,
            success: function (data, status, xhr) {
                if (success) {
                    success(data, status, xhr);
                }
            },
            error: function (xhr, errorType, error) {
                if (fail) {
                    fail(xhr, errorType, error);
                }
            }
        })
    }

    function get(action, data, success, fail) {
        data = data ? data : {};

        action = action + "?" + Core.Util.transformObjectToUrlencodedData(data);
        $.ajax({
            url: action,
            type: "GET",
            dataType: "json",
            success: function (data, status, xhr) {
                if (success) {
                    success(data, status, xhr);
                }
            },
            error: function (xhr, errorType, error) {
                if (fail) {
                    fail(xhr, errorType, error);
                }
            }
        })
    }

    return {
        post: post,
        get: get
    }
})();


Core.Util = (function() {
    function transformObjectToUrlencodedData(obj) {
        var p = [];
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                p.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
            }
        }
        return p.join('&');
    }

    return {
        transformObjectToUrlencodedData: transformObjectToUrlencodedData
    }
})();
