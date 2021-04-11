

const fieldIds = ["cusname", "projname", "demotime", "guaranteedays", "phone"];
const template = 'Chào <cusname>,\nKBA Solutions đã thực hiện nhiều dự án <projname> và có thể đáp ứng tốt yêu cầu của bạn.\nRất mong được hợp tác với bạn.<split>Đầu tiên, KBA Solutions sẽ trao đổi chi tiết về yêu cầu với bạn.\nSau đó, bên mình sẽ tư vấn giải pháp tối ưu nhất và bàn giao demo trong vòng <demotime> kể từ lúc thống nhất.Các sản phẩm <projname> của KBA Solutions được bảo hành <guaranteedays> với các lỗi phát sinh.\n<split>Chào bạn,KBA Solutions đã tìm hiểu yêu cầu của bạn và có thể đáp ứng tốt yêu cầu này.\nBạn có thể cung cấp Zalo/Skype/SĐT hoặc phương thức liên hệ tiện lợi cho bạn để bên mình liên hệ nhé.\nBạn có thể liên hệ với bên mình thông qua Zalo: <phone>'


function copyToClipboard(element) {
    var range = document.createRange();
    range.selectNode(element);
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
    element.style.backgroundColor = "blue";
    element.style.color = "white";
}

function makeCopiableDivWithContent(content) {
    const divElem = document.createElement("div");
    divElem.innerText = content;
    divElem.onclick = () => copyToClipboard(divElem)
    return divElem;
}
function makeIt() {
    const inputValues = {};
    let content = template;

    fieldIds.map(item => {
        inputValues[item] = document.getElementById(item).value
    })

    for (let label in inputValues) {
        content = content.replaceAll(`<${label}>`, inputValues[label]);
    }

    const contentBlocks = content.split("<split>");
    console.log(contentBlocks)
    const resultElem = document.getElementById("result");
    contentBlocks.forEach(
        block => {
            resultElem.appendChild(makeCopiableDivWithContent(block))
        }
    )


}