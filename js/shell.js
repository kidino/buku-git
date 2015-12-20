function shellScript(content)
{
    var c = $('<div />', { html: content })

    c.find('code.lang-sh').each(function () {
        var lines = $(this).html()
            .split('\n')
            .filter(function (val) {
                return val.length > 0;
            }).map(function (val) {
                return val.trim();
            }).map(function (val) {
                var cls = 'code-output';

                // If line starts with $, it is a command. Otherwise, it is an output.
                if (val[0] == '$') {
                    cls = 'code-cmd';

                    // Surround the dollar sign with <span>
                    val = "<span class='code-dollar'>$</span>" + val.slice(1, val.length).trim();
                }

                return "<span class='" + cls + "'>" + val + "</span>";
            });

        $(this).html(lines.join('\n'));
    });

    return c.html();
}
