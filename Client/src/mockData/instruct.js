/**
 * Created by wb-shiyudong on 2016/1/15.
 * 下达指令接口模拟
 */
var merge = require('webpack-merge');

module.exports = {
    InstructData: {
        "message": "请求成功,返回数据",
        "data": {
            "substationAlarms": [{
                "waitFeedbackNum": 1,
                "id": 1,
                "overtimeFeedbackNum": 0,
                "gmtCreate": "2016-01-14 18:38:23",
                "name": "西湖区"
            }, {
                "waitFeedbackNum": 1,
                "id": 2,
                "overtimeFeedbackNum": 1,
                "gmtCreate": "2016-01-14 18:38:23",
                "name": "上城区"
            }, {
                "waitFeedbackNum": 2,
                "id": 3,
                "overtimeFeedbackNum": 1,
                "gmtCreate": "2016-01-14 18:38:23",
                "name": "下城区"
            }, {
                "waitFeedbackNum": 1,
                "id": 4,
                "overtimeFeedbackNum": 1,
                "gmtCreate": "2016-01-14 18:38:23",
                "name": "拱墅区"
            }, {
                "waitFeedbackNum": 0,
                "id": 5,
                "overtimeFeedbackNum": 0,
                "gmtCreate": "2016-01-14 18:38:23",
                "name": "江干区"
            }, {
                "waitFeedbackNum": 3,
                "id": 6,
                "overtimeFeedbackNum": 0,
                "gmtCreate": "2016-01-14 18:38:23",
                "name": "滨江区"
            }, {
                "waitFeedbackNum": 1,
                "id": 7,
                "overtimeFeedbackNum": 0,
                "gmtCreate": "2016-01-14 18:38:23",
                "name": "萧山区"
            }, {
                "waitFeedbackNum": 3,
                "id": 8,
                "overtimeFeedbackNum": 1,
                "gmtCreate": "2016-01-14 18:38:23",
                "name": "余杭区"
            }, {
                "waitFeedbackNum": 2,
                "id": 9,
                "overtimeFeedbackNum": 0,
                "gmtCreate": "2016-01-14 18:38:23",
                "name": "富阳区"
            }, {
                "waitFeedbackNum": 1,
                "id": 10,
                "overtimeFeedbackNum": 0,
                "gmtCreate": "2016-01-14 18:38:23",
                "name": "反恐"
            }, {
                "waitFeedbackNum": 1,
                "id": 11,
                "overtimeFeedbackNum": 0,
                "gmtCreate": "2016-01-14 18:38:23",
                "name": "网警"
            }, {
                "waitFeedbackNum": 1,
                "id": 12,
                "overtimeFeedbackNum": 0,
                "gmtCreate": "2016-01-14 18:38:23",
                "name": "技侦"
            }, {
                "waitFeedbackNum": 1,
                "id": 13,
                "overtimeFeedbackNum": 1,
                "gmtCreate": "2016-01-14 18:38:23",
                "name": "刑侦"
            }, {
                "waitFeedbackNum": 1,
                "id": 14,
                "overtimeFeedbackNum": 0,
                "gmtCreate": "2016-01-14 18:38:23",
                "name": "国保"
            }, {
                "waitFeedbackNum": 1,
                "id": 15,
                "overtimeFeedbackNum": 0,
                "gmtCreate": "2016-01-14 18:38:23",
                "name": "出入境"
            }, {
                "waitFeedbackNum": 1,
                "id": 16,
                "overtimeFeedbackNum": 0,
                "gmtCreate": "2016-01-14 18:38:23",
                "name": "双基"
            }],
            "instructStats": {
                "waitFeedbackNum": 21,
                "id": 1,
                "overtimeFeedbackNum": 4,
                "totalNum": 39,
                "noRiskNum": 12,
                "gmtCreate": "2016-01-14 19:07:28",
                "haveRiskNum": 4,
                "unknownRiskNum": 2
            },
            "instDetails": [{
                "gmtModified": "2016-01-14 20:21:32",
                "gmtLateOperateZl": "2016-01-10 09:40:00",
                "actCodeDesc": "见面核查",
                "gmtCreate": "2016-01-14 20:21:32",
                "feedbackResultCode": null,
                "checkUnits": "余杭区分局",
                "actCode": "MEET_VERIF",
                "stateCode": "IN_PROCES",
                "isOvertime": "是",
                "gmtFinishedZl": null,
                "id": 174,
                "gmtCreateZl": "2016-01-10 09:20:00",
                "content": "入住SJ人员经常住宿的酒店，同行多人，行为轨迹异常，在XX场馆附近逗留",
                "stateDesc": "处理中",
                "gmtIssueZl": "2016-01-10 09:30:00",
                "gmtHandledZl": "2016-01-10 09:40:00",
                "zlId": 100008,
                "feedbackResultDesc": null
            }, {
                "gmtModified": "2016-01-14 20:21:33",
                "gmtLateOperateZl": "2016-01-11 15:40:00",
                "actCodeDesc": "见面核查",
                "gmtCreate": "2016-01-14 20:21:33",
                "feedbackResultCode": null,
                "checkUnits": "滨江区分局",
                "actCode": "MEET_VERIF",
                "stateCode": "IN_PROCES",
                "isOvertime": "否",
                "gmtFinishedZl": null,
                "id": 175,
                "gmtCreateZl": "2016-01-11 15:20:00",
                "content": "入住SJ人员经常住宿的酒店，同行多人",
                "stateDesc": "处理中",
                "gmtIssueZl": "2016-01-11 15:30:00",
                "gmtHandledZl": "2016-01-11 15:40:00",
                "zlId": 100009,
                "feedbackResultDesc": null
            }, {
                "gmtModified": "2016-01-14 20:21:33",
                "gmtLateOperateZl": "2016-01-11 15:40:00",
                "actCodeDesc": "见面核查",
                "gmtCreate": "2016-01-14 20:21:33",
                "feedbackResultCode": null,
                "checkUnits": "富阳区分局",
                "actCode": "MEET_VERIF",
                "stateCode": "IN_PROCES",
                "isOvertime": "否",
                "gmtFinishedZl": null,
                "id": 176,
                "gmtCreateZl": "2016-01-11 15:20:00",
                "content": "入住SJ人员经常住宿的酒店，同行多人",
                "stateDesc": "处理中",
                "gmtIssueZl": "2016-01-11 15:30:00",
                "gmtHandledZl": "2016-01-11 15:40:00",
                "zlId": 100010,
                "feedbackResultDesc": null
            }, {
                "gmtModified": "2016-01-14 20:21:33",
                "gmtLateOperateZl": "2016-01-10 12:00:00",
                "actCodeDesc": "见面核查",
                "gmtCreate": "2016-01-14 20:21:33",
                "feedbackResultCode": "NO_RISK",
                "checkUnits": "上城区分局",
                "actCode": "MEET_VERIF",
                "stateCode": "FINISHED",
                "isOvertime": "否",
                "gmtFinishedZl": "2016-01-10 12:00:00",
                "id": 177,
                "gmtCreateZl": "2016-01-10 09:00:00",
                "content": "根据购买收货地址，检查购买的高压锅、钉子是否存在风险，以及租车用途",
                "stateDesc": "已完成",
                "gmtIssueZl": "2016-01-10 09:10:00",
                "gmtHandledZl": "2016-01-10 09:20:00",
                "zlId": 100011,
                "feedbackResultDesc": "无风险"
            }, {
                "gmtModified": "2016-01-14 20:21:33",
                "gmtLateOperateZl": "2016-01-10 09:20:00",
                "actCodeDesc": "见面核查",
                "gmtCreate": "2016-01-14 20:21:33",
                "feedbackResultCode": null,
                "checkUnits": "下城区分局",
                "actCode": "MEET_VERIF",
                "stateCode": "IN_PROCES",
                "isOvertime": "是",
                "gmtFinishedZl": null,
                "id": 178,
                "gmtCreateZl": "2016-01-10 09:00:00",
                "content": "根据工作单位地址，检查购买的高压锅、钉子是否存在风险，以及租车用途",
                "stateDesc": "处理中",
                "gmtIssueZl": "2016-01-10 09:10:00",
                "gmtHandledZl": "2016-01-10 09:20:00",
                "zlId": 100012,
                "feedbackResultDesc": null
            }, {
                "gmtModified": "2016-01-14 20:21:33",
                "gmtLateOperateZl": "2016-01-10 09:20:00",
                "actCodeDesc": "线索补充",
                "gmtCreate": "2016-01-14 20:21:33",
                "feedbackResultCode": null,
                "checkUnits": "技侦",
                "actCode": "CLUES_ADDS",
                "stateCode": "SENTED",
                "isOvertime": "否",
                "gmtFinishedZl": null,
                "id": 179,
                "gmtCreateZl": "2016-01-12 09:10:00",
                "content": "存在异常购买行为，排查是否还有其他异常购买行为",
                "stateDesc": "已下发",
                "gmtIssueZl": "2016-01-10 09:20:00",
                "gmtHandledZl": null,
                "zlId": 100013,
                "feedbackResultDesc": null
            }, {
                "gmtModified": "2016-01-14 20:21:33",
                "gmtLateOperateZl": "2016-01-12 09:20:00",
                "actCodeDesc": "案线经营",
                "gmtCreate": "2016-01-14 20:21:33",
                "feedbackResultCode": null,
                "checkUnits": "网警",
                "actCode": "CASE_MANAGE",
                "stateCode": "CREATED",
                "isOvertime": "否",
                "gmtFinishedZl": null,
                "id": 180,
                "gmtCreateZl": "2016-01-12 09:20:00",
                "content": "查询运营商通讯记录，是否有与重点人员通联行为",
                "stateDesc": "已创建",
                "gmtIssueZl": null,
                "gmtHandledZl": null,
                "zlId": 100014,
                "feedbackResultDesc": null
            }, {
                "gmtModified": "2016-01-14 20:21:33",
                "gmtLateOperateZl": "2016-01-11 12:00:00",
                "actCodeDesc": "见面核查",
                "gmtCreate": "2016-01-14 20:21:33",
                "feedbackResultCode": "NO_RISK",
                "checkUnits": "下城区分局",
                "actCode": "MEET_VERIF",
                "stateCode": "FINISHED",
                "isOvertime": "否",
                "gmtFinishedZl": "2016-01-11 12:00:00",
                "id": 181,
                "gmtCreateZl": "2016-01-11 09:00:00",
                "content": "根据购买收货地址，检查购买的高压锅、钉子是否存在风险，以及租车用途",
                "stateDesc": "已完成",
                "gmtIssueZl": "2016-01-11 09:10:00",
                "gmtHandledZl": "2016-01-11 09:20:00",
                "zlId": 100015,
                "feedbackResultDesc": "无风险"
            }, {
                "gmtModified": "2016-01-14 20:21:33",
                "gmtLateOperateZl": "2016-01-11 12:10:00",
                "actCodeDesc": "线索补充",
                "gmtCreate": "2016-01-14 20:21:33",
                "feedbackResultCode": "NO_RISK",
                "checkUnits": "技侦",
                "actCode": "CLUES_ADDS",
                "stateCode": "FINISHED",
                "isOvertime": "否",
                "gmtFinishedZl": "2016-01-11 12:10:00",
                "id": 182,
                "gmtCreateZl": "2016-01-11 09:10:00",
                "content": "存在异常购买行为，排查是否还有其他异常购买行为",
                "stateDesc": "已完成",
                "gmtIssueZl": "2016-01-11 09:20:00",
                "gmtHandledZl": "2016-01-11 09:30:00",
                "zlId": 100016,
                "feedbackResultDesc": "无风险"
            }, {
                "gmtModified": "2016-01-14 20:21:33",
                "gmtLateOperateZl": "2016-01-11 12:20:00",
                "actCodeDesc": "案线经营",
                "gmtCreate": "2016-01-14 20:21:33",
                "feedbackResultCode": "NO_RISK",
                "checkUnits": "网警",
                "actCode": "CASE_MANAGE",
                "stateCode": "FINISHED",
                "isOvertime": "否",
                "gmtFinishedZl": "2016-01-11 12:20:00",
                "id": 183,
                "gmtCreateZl": "2016-01-11 09:20:00",
                "content": "查询运营商通讯记录，是否有与重点人员通联行为",
                "stateDesc": "已完成",
                "gmtIssueZl": "2016-01-11 09:30:00",
                "gmtHandledZl": "2016-01-11 09:40:00",
                "zlId": 100017,
                "feedbackResultDesc": "无风险"
            }, {
                "gmtModified": "2016-01-14 20:21:33",
                "gmtLateOperateZl": "2016-01-11 12:00:00",
                "actCodeDesc": "线索补充",
                "gmtCreate": "2016-01-14 20:21:33",
                "feedbackResultCode": "NO_RISK",
                "checkUnits": "技侦",
                "actCode": "CLUES_ADDS",
                "stateCode": "FINISHED",
                "isOvertime": "否",
                "gmtFinishedZl": "2016-01-11 12:00:00",
                "id": 184,
                "gmtCreateZl": "2016-01-11 09:00:00",
                "content": "购买了高压锅、定时器、钉子、火柴多种风险商品，需要排查是否存在合理用途",
                "stateDesc": "已完成",
                "gmtIssueZl": "2016-01-11 09:10:00",
                "gmtHandledZl": "2016-01-11 09:20:00",
                "zlId": 100018,
                "feedbackResultDesc": "无风险"
            }, {
                "gmtModified": "2016-01-14 20:21:33",
                "gmtLateOperateZl": "2016-01-11 12:00:00",
                "actCodeDesc": "线索补充",
                "gmtCreate": "2016-01-14 20:21:33",
                "feedbackResultCode": "HAVE_RISK",
                "checkUnits": "刑侦",
                "actCode": "CLUES_ADDS",
                "stateCode": "FINISHED",
                "isOvertime": "否",
                "gmtFinishedZl": "2016-01-11 12:00:00",
                "id": 185,
                "gmtCreateZl": "2016-01-11 09:00:00",
                "content": "购买了高压锅、定时器、钉子、火柴多种风险商品，需要排查是否存在合理用途",
                "stateDesc": "已完成",
                "gmtIssueZl": "2016-01-11 09:10:00",
                "gmtHandledZl": "2016-01-11 09:20:00",
                "zlId": 100019,
                "feedbackResultDesc": "有风险"
            }, {
                "gmtModified": "2016-01-14 20:21:33",
                "gmtLateOperateZl": "2016-01-11 12:00:00",
                "actCodeDesc": "线索补充",
                "gmtCreate": "2016-01-14 20:21:33",
                "feedbackResultCode": "UNKNOWN",
                "checkUnits": "技侦",
                "actCode": "CLUES_ADDS",
                "stateCode": "FINISHED",
                "isOvertime": "否",
                "gmtFinishedZl": "2016-01-11 12:00:00",
                "id": 186,
                "gmtCreateZl": "2016-01-11 09:00:00",
                "content": "与境外土耳其有通话记录，需要核实对方身份",
                "stateDesc": "已完成",
                "gmtIssueZl": "2016-01-11 09:10:00",
                "gmtHandledZl": "2016-01-11 09:20:00",
                "zlId": 100020,
                "feedbackResultDesc": "未知"
            }, {
                "gmtModified": "2016-01-14 20:21:33",
                "gmtLateOperateZl": "2016-01-11 12:00:00",
                "actCodeDesc": "见面核查",
                "gmtCreate": "2016-01-14 20:21:33",
                "feedbackResultCode": "NO_RISK",
                "checkUnits": "上城区分局",
                "actCode": "MEET_VERIF",
                "stateCode": "FINISHED",
                "isOvertime": "否",
                "gmtFinishedZl": "2016-01-11 12:00:00",
                "id": 187,
                "gmtCreateZl": "2016-01-11 09:00:00",
                "content": "SJ人员首次入杭，需要线下调查",
                "stateDesc": "已完成",
                "gmtIssueZl": "2016-01-11 09:10:00",
                "gmtHandledZl": "2016-01-11 09:20:00",
                "zlId": 100021,
                "feedbackResultDesc": "无风险"
            }, {
                "gmtModified": "2016-01-14 20:21:33",
                "gmtLateOperateZl": "2016-01-11 12:00:00",
                "actCodeDesc": "见面核查",
                "gmtCreate": "2016-01-14 20:21:33",
                "feedbackResultCode": "NO_RISK",
                "checkUnits": "江干区分局",
                "actCode": "MEET_VERIF",
                "stateCode": "FINISHED",
                "isOvertime": "否",
                "gmtFinishedZl": "2016-01-11 12:00:00",
                "id": 188,
                "gmtCreateZl": "2016-01-11 09:00:00",
                "content": "核查租赁越野车用途，是否存在重装风险",
                "stateDesc": "已完成",
                "gmtIssueZl": "2016-01-11 09:10:00",
                "gmtHandledZl": "2016-01-11 09:20:00",
                "zlId": 100022,
                "feedbackResultDesc": "无风险"
            }, {
                "gmtModified": "2016-01-14 20:21:33",
                "gmtLateOperateZl": "2016-01-10 09:20:00",
                "actCodeDesc": "见面核查",
                "gmtCreate": "2016-01-14 20:21:33",
                "feedbackResultCode": null,
                "checkUnits": "拱墅区分局",
                "actCode": "MEET_VERIF",
                "stateCode": "IN_PROCES",
                "isOvertime": "是",
                "gmtFinishedZl": null,
                "id": 189,
                "gmtCreateZl": "2016-01-10 09:00:00",
                "content": "核查租赁7座商务车用途，是否存在运输、作案风险",
                "stateDesc": "处理中",
                "gmtIssueZl": "2016-01-10 09:10:00",
                "gmtHandledZl": "2016-01-10 09:20:00",
                "zlId": 100023,
                "feedbackResultDesc": null
            }, {
                "gmtModified": "2016-01-14 20:21:33",
                "gmtLateOperateZl": "2016-01-10 09:20:00",
                "actCodeDesc": "见面核查",
                "gmtCreate": "2016-01-14 20:21:33",
                "feedbackResultCode": null,
                "checkUnits": "滨江区分局",
                "actCode": "MEET_VERIF",
                "stateCode": "SENTED",
                "isOvertime": "否",
                "gmtFinishedZl": null,
                "id": 190,
                "gmtCreateZl": "2016-01-12 09:10:00",
                "content": "核查租赁小型卡车用途，是否存在运输危险化学品风险",
                "stateDesc": "已下发",
                "gmtIssueZl": "2016-01-10 09:20:00",
                "gmtHandledZl": null,
                "zlId": 100024,
                "feedbackResultDesc": null
            }, {
                "gmtModified": "2016-01-14 20:21:33",
                "gmtLateOperateZl": "2016-01-12 09:20:00",
                "actCodeDesc": "见面核查",
                "gmtCreate": "2016-01-14 20:21:33",
                "feedbackResultCode": null,
                "checkUnits": "西湖区分局",
                "actCode": "MEET_VERIF",
                "stateCode": "CREATED",
                "isOvertime": "否",
                "gmtFinishedZl": null,
                "id": 191,
                "gmtCreateZl": "2016-01-12 09:20:00",
                "content": "核查租赁大巴车用途，是否存在群体闹事风险",
                "stateDesc": "已创建",
                "gmtIssueZl": null,
                "gmtHandledZl": null,
                "zlId": 100025,
                "feedbackResultDesc": null
            }, {
                "gmtModified": "2016-01-14 20:21:33",
                "gmtLateOperateZl": "2016-01-10 09:20:00",
                "actCodeDesc": "见面核查",
                "gmtCreate": "2016-01-14 20:21:33",
                "feedbackResultCode": null,
                "checkUnits": "萧山区分局",
                "actCode": "MEET_VERIF",
                "stateCode": "SENTED",
                "isOvertime": "否",
                "gmtFinishedZl": null,
                "id": 192,
                "gmtCreateZl": "2016-01-12 09:10:00",
                "content": "核查租赁小型卡车用途，是否存在运输危险化学品风险",
                "stateDesc": "已下发",
                "gmtIssueZl": "2016-01-10 09:20:00",
                "gmtHandledZl": null,
                "zlId": 100026,
                "feedbackResultDesc": null
            }, {
                "gmtModified": "2016-01-14 20:21:33",
                "gmtLateOperateZl": "2016-01-12 09:20:00",
                "actCodeDesc": "见面核查",
                "gmtCreate": "2016-01-14 20:21:33",
                "feedbackResultCode": null,
                "checkUnits": "余杭区分局",
                "actCode": "MEET_VERIF",
                "stateCode": "CREATED",
                "isOvertime": "否",
                "gmtFinishedZl": null,
                "id": 193,
                "gmtCreateZl": "2016-01-12 09:20:00",
                "content": "核查租赁大巴车用途，是否存在群体闹事风险",
                "stateDesc": "已创建",
                "gmtIssueZl": null,
                "gmtHandledZl": null,
                "zlId": 100027,
                "feedbackResultDesc": null
            }, {
                "gmtModified": "2016-01-14 20:21:33",
                "gmtLateOperateZl": "2016-01-11 12:00:00",
                "actCodeDesc": "见面核查",
                "gmtCreate": "2016-01-14 20:21:33",
                "feedbackResultCode": "NO_RISK",
                "checkUnits": "富阳区分局",
                "actCode": "MEET_VERIF",
                "stateCode": "FINISHED",
                "isOvertime": "否",
                "gmtFinishedZl": "2016-01-11 12:00:00",
                "id": 194,
                "gmtCreateZl": "2016-01-11 09:00:00",
                "content": "核查租赁越野车用途，是否存在重装风险",
                "stateDesc": "已完成",
                "gmtIssueZl": "2016-01-11 09:10:00",
                "gmtHandledZl": "2016-01-11 09:20:00",
                "zlId": 100028,
                "feedbackResultDesc": "无风险"
            }, {
                "gmtModified": "2016-01-14 20:21:33",
                "gmtLateOperateZl": "2016-01-10 09:20:00",
                "actCodeDesc": "见面核查",
                "gmtCreate": "2016-01-14 20:21:33",
                "feedbackResultCode": null,
                "checkUnits": "上城区分局",
                "actCode": "MEET_VERIF",
                "stateCode": "IN_PROCES",
                "isOvertime": "是",
                "gmtFinishedZl": null,
                "id": 195,
                "gmtCreateZl": "2016-01-10 09:00:00",
                "content": "核查租赁7座商务车用途，是否存在运输、作案风险",
                "stateDesc": "处理中",
                "gmtIssueZl": "2016-01-10 09:10:00",
                "gmtHandledZl": "2016-01-10 09:20:00",
                "zlId": 100029,
                "feedbackResultDesc": null
            }, {
                "gmtModified": "2016-01-14 20:21:33",
                "gmtLateOperateZl": "2016-01-10 09:20:00",
                "actCodeDesc": "见面核查",
                "gmtCreate": "2016-01-14 20:21:33",
                "feedbackResultCode": null,
                "checkUnits": "下城区分局",
                "actCode": "MEET_VERIF",
                "stateCode": "SENTED",
                "isOvertime": "否",
                "gmtFinishedZl": null,
                "id": 196,
                "gmtCreateZl": "2016-01-12 09:10:00",
                "content": "核查租赁小型卡车用途，是否存在运输危险化学品风险",
                "stateDesc": "已下发",
                "gmtIssueZl": "2016-01-10 09:20:00",
                "gmtHandledZl": null,
                "zlId": 100030,
                "feedbackResultDesc": null
            }, {
                "gmtModified": "2016-01-14 20:21:33",
                "gmtLateOperateZl": "2016-01-11 12:20:00",
                "actCodeDesc": "案线经营",
                "gmtCreate": "2016-01-14 20:21:33",
                "feedbackResultCode": "NO_RISK",
                "checkUnits": "江干区分局",
                "actCode": "CASE_MANAGE",
                "stateCode": "FINISHED",
                "isOvertime": "否",
                "gmtFinishedZl": "2016-01-11 12:20:00",
                "id": 197,
                "gmtCreateZl": "2016-01-11 09:20:00",
                "content": "入住SJ人员经常住宿的酒店，同行多人，行为轨迹异常，在XX场馆附近逗留",
                "stateDesc": "已完成",
                "gmtIssueZl": "2016-01-11 09:30:00",
                "gmtHandledZl": "2016-01-11 09:40:00",
                "zlId": 100031,
                "feedbackResultDesc": "无风险"
            }, {
                "gmtModified": "2016-01-14 20:21:33",
                "gmtLateOperateZl": "2016-01-11 12:00:00",
                "actCodeDesc": "线索补充",
                "gmtCreate": "2016-01-14 20:21:33",
                "feedbackResultCode": "HAVE_RISK",
                "checkUnits": "拱墅区分局",
                "actCode": "CLUES_ADDS",
                "stateCode": "FINISHED",
                "isOvertime": "否",
                "gmtFinishedZl": "2016-01-11 12:00:00",
                "id": 198,
                "gmtCreateZl": "2016-01-11 09:00:00",
                "content": "入住SJ人员经常住宿的酒店，同行多人",
                "stateDesc": "已完成",
                "gmtIssueZl": "2016-01-11 09:10:00",
                "gmtHandledZl": "2016-01-11 09:20:00",
                "zlId": 100032,
                "feedbackResultDesc": "有风险"
            }, {
                "gmtModified": "2016-01-14 20:21:33",
                "gmtLateOperateZl": "2016-01-11 15:40:00",
                "actCodeDesc": "线索补充",
                "gmtCreate": "2016-01-14 20:21:33",
                "feedbackResultCode": null,
                "checkUnits": "滨江区分局",
                "actCode": "CLUES_ADDS",
                "stateCode": "IN_PROCES",
                "isOvertime": "否",
                "gmtFinishedZl": null,
                "id": 199,
                "gmtCreateZl": "2016-01-11 15:20:00",
                "content": "入住SJ人员经常住宿的酒店，同行多人",
                "stateDesc": "处理中",
                "gmtIssueZl": "2016-01-11 15:30:00",
                "gmtHandledZl": "2016-01-11 15:40:00",
                "zlId": 100033,
                "feedbackResultDesc": null
            }, {
                "gmtModified": "2016-01-14 20:21:33",
                "gmtLateOperateZl": "2016-01-11 12:00:00",
                "actCodeDesc": "案线经营",
                "gmtCreate": "2016-01-14 20:21:33",
                "feedbackResultCode": "HAVE_RISK",
                "checkUnits": "西湖区分局",
                "actCode": "CASE_MANAGE",
                "stateCode": "FINISHED",
                "isOvertime": "否",
                "gmtFinishedZl": "2016-01-11 12:00:00",
                "id": 200,
                "gmtCreateZl": "2016-01-11 09:00:00",
                "content": "入住SJ人员经常住宿的酒店，同行多人，行为轨迹异常，在XX场馆附近逗留",
                "stateDesc": "已完成",
                "gmtIssueZl": "2016-01-11 09:10:00",
                "gmtHandledZl": "2016-01-11 09:20:00",
                "zlId": 100034,
                "feedbackResultDesc": "有风险"
            }, {
                "gmtModified": "2016-01-14 20:21:34",
                "gmtLateOperateZl": "2016-01-11 12:00:00",
                "actCodeDesc": "见面核查",
                "gmtCreate": "2016-01-14 20:21:34",
                "feedbackResultCode": "NO_RISK",
                "checkUnits": "萧山区分局",
                "actCode": "MEET_VERIF",
                "stateCode": "FINISHED",
                "isOvertime": "否",
                "gmtFinishedZl": "2016-01-11 12:00:00",
                "id": 201,
                "gmtCreateZl": "2016-01-11 09:00:00",
                "content": "入住SJ人员经常住宿的酒店，同行多人",
                "stateDesc": "已完成",
                "gmtIssueZl": "2016-01-11 09:10:00",
                "gmtHandledZl": "2016-01-11 09:20:00",
                "zlId": 100035,
                "feedbackResultDesc": "无风险"
            }, {
                "gmtModified": "2016-01-14 20:21:34",
                "gmtLateOperateZl": "2016-01-11 15:40:00",
                "actCodeDesc": "见面核查",
                "gmtCreate": "2016-01-14 20:21:34",
                "feedbackResultCode": null,
                "checkUnits": "余杭区分局",
                "actCode": "MEET_VERIF",
                "stateCode": "IN_PROCES",
                "isOvertime": "否",
                "gmtFinishedZl": null,
                "id": 202,
                "gmtCreateZl": "2016-01-11 15:20:00",
                "content": "入住SJ人员经常住宿的酒店，同行多人",
                "stateDesc": "处理中",
                "gmtIssueZl": "2016-01-11 15:30:00",
                "gmtHandledZl": "2016-01-11 15:40:00",
                "zlId": 100036,
                "feedbackResultDesc": null
            }, {
                "gmtModified": "2016-01-14 20:21:34",
                "gmtLateOperateZl": "2016-01-11 09:40:00",
                "actCodeDesc": "案线经营",
                "gmtCreate": "2016-01-14 20:21:34",
                "feedbackResultCode": null,
                "checkUnits": "富阳区分局",
                "actCode": "CASE_MANAGE",
                "stateCode": "IN_PROCES",
                "isOvertime": "否",
                "gmtFinishedZl": null,
                "id": 203,
                "gmtCreateZl": "2016-01-11 09:20:00",
                "content": "入住SJ人员经常住宿的酒店，同行多人，行为轨迹异常，在XX场馆附近逗留",
                "stateDesc": "处理中",
                "gmtIssueZl": "2016-01-11 09:30:00",
                "gmtHandledZl": "2016-01-11 09:40:00",
                "zlId": 100037,
                "feedbackResultDesc": null
            }, {
                "gmtModified": "2016-01-14 20:21:34",
                "gmtLateOperateZl": "2016-01-11 12:00:00",
                "actCodeDesc": "见面核查",
                "gmtCreate": "2016-01-14 20:21:34",
                "feedbackResultCode": "UNKNOWN",
                "checkUnits": "上城区分局",
                "actCode": "MEET_VERIF",
                "stateCode": "FINISHED",
                "isOvertime": "否",
                "gmtFinishedZl": "2016-01-11 12:00:00",
                "id": 204,
                "gmtCreateZl": "2016-01-11 09:00:00",
                "content": "入住SJ人员经常住宿的酒店，同行多人",
                "stateDesc": "已完成",
                "gmtIssueZl": "2016-01-11 09:10:00",
                "gmtHandledZl": "2016-01-11 09:20:00",
                "zlId": 100038,
                "feedbackResultDesc": "未知"
            }, {
                "gmtModified": "2016-01-14 20:21:34",
                "gmtLateOperateZl": "2016-01-11 12:00:00",
                "actCodeDesc": "见面核查",
                "gmtCreate": "2016-01-14 20:21:34",
                "feedbackResultCode": "NO_RISK",
                "checkUnits": "下城区分局",
                "actCode": "MEET_VERIF",
                "stateCode": "FINISHED",
                "isOvertime": "否",
                "gmtFinishedZl": "2016-01-11 12:00:00",
                "id": 205,
                "gmtCreateZl": "2016-01-11 09:00:00",
                "content": "入住SJ人员经常住宿的酒店，同行多人",
                "stateDesc": "已完成",
                "gmtIssueZl": "2016-01-11 09:10:00",
                "gmtHandledZl": "2016-01-11 09:20:00",
                "zlId": 100039,
                "feedbackResultDesc": "无风险"
            }, {
                "gmtModified": "2016-01-14 20:21:34",
                "gmtLateOperateZl": "2016-01-11 12:00:00",
                "actCodeDesc": "专案侦查",
                "gmtCreate": "2016-01-14 20:21:34",
                "feedbackResultCode": "HAVE_RISK",
                "checkUnits": "反恐",
                "actCode": "CASE_SPY",
                "stateCode": "FINISHED",
                "isOvertime": "否",
                "gmtFinishedZl": "2016-01-11 12:00:00",
                "id": 206,
                "gmtCreateZl": "2016-01-11 09:00:00",
                "content": "国内出行线路符合伊吉拉特路径特征，并且与重点人有关联，核查是否存在出境去土耳其可能性",
                "stateDesc": "已完成",
                "gmtIssueZl": "2016-01-11 09:10:00",
                "gmtHandledZl": "2016-01-11 09:20:00",
                "zlId": 100040,
                "feedbackResultDesc": "有风险"
            }, {
                "gmtModified": "2016-01-14 20:21:34",
                "gmtLateOperateZl": "2016-01-10 09:20:00",
                "actCodeDesc": "案线经营",
                "gmtCreate": "2016-01-14 20:21:34",
                "feedbackResultCode": null,
                "checkUnits": "刑侦",
                "actCode": "CASE_MANAGE",
                "stateCode": "IN_PROCES",
                "isOvertime": "是",
                "gmtFinishedZl": null,
                "id": 207,
                "gmtCreateZl": "2016-01-10 09:00:00",
                "content": "存在多笔大额资金转入，核查资金来路是否正常",
                "stateDesc": "处理中",
                "gmtIssueZl": "2016-01-10 09:10:00",
                "gmtHandledZl": "2016-01-10 09:20:00",
                "zlId": 100041,
                "feedbackResultDesc": null
            }, {
                "gmtModified": "2016-01-14 20:21:34",
                "gmtLateOperateZl": "2016-01-11 15:40:00",
                "actCodeDesc": "专案侦查",
                "gmtCreate": "2016-01-14 20:21:34",
                "feedbackResultCode": null,
                "checkUnits": "出入境",
                "actCode": "CASE_SPY",
                "stateCode": "IN_PROCES",
                "isOvertime": "否",
                "gmtFinishedZl": null,
                "id": 208,
                "gmtCreateZl": "2016-01-11 15:20:00",
                "content": "国内出行线路符合伊吉拉特路径特征，核查是否存在出境去土耳其可能性",
                "stateDesc": "处理中",
                "gmtIssueZl": "2016-01-11 15:30:00",
                "gmtHandledZl": "2016-01-11 15:40:00",
                "zlId": 100042,
                "feedbackResultDesc": null
            }, {
                "gmtModified": "2016-01-14 20:21:34",
                "gmtLateOperateZl": "2016-01-11 15:40:00",
                "actCodeDesc": "案线经营",
                "gmtCreate": "2016-01-14 20:21:34",
                "feedbackResultCode": null,
                "checkUnits": "国保",
                "actCode": "CASE_MANAGE",
                "stateCode": "IN_PROCES",
                "isOvertime": "否",
                "gmtFinishedZl": null,
                "id": 209,
                "gmtCreateZl": "2016-01-11 15:20:00",
                "content": "购买大量暴恐类书籍、旗帜，是否存在风险",
                "stateDesc": "处理中",
                "gmtIssueZl": "2016-01-11 15:30:00",
                "gmtHandledZl": "2016-01-11 15:40:00",
                "zlId": 100043,
                "feedbackResultDesc": null
            }, {
                "gmtModified": "2016-01-14 20:21:34",
                "gmtLateOperateZl": "2016-01-11 15:40:00",
                "actCodeDesc": "见面核查",
                "gmtCreate": "2016-01-14 20:21:34",
                "feedbackResultCode": null,
                "checkUnits": "反恐",
                "actCode": "MEET_VERIF",
                "stateCode": "IN_PROCES",
                "isOvertime": "否",
                "gmtFinishedZl": null,
                "id": 210,
                "gmtCreateZl": "2016-01-11 15:20:00",
                "content": "今日新入行，之前在南疆多地频繁活动",
                "stateDesc": "处理中",
                "gmtIssueZl": "2016-01-11 15:30:00",
                "gmtHandledZl": "2016-01-11 15:40:00",
                "zlId": 100044,
                "feedbackResultDesc": null
            }, {
                "gmtModified": "2016-01-14 20:21:34",
                "gmtLateOperateZl": "2016-01-11 12:00:00",
                "actCodeDesc": "线索补充",
                "gmtCreate": "2016-01-14 20:21:34",
                "feedbackResultCode": "NO_RISK",
                "checkUnits": "双基",
                "actCode": "CLUES_ADDS",
                "stateCode": "FINISHED",
                "isOvertime": "否",
                "gmtFinishedZl": "2016-01-11 12:00:00",
                "id": 211,
                "gmtCreateZl": "2016-01-11 09:00:00",
                "content": "最近被单位解雇失业，是否存在报复社会倾向",
                "stateDesc": "已完成",
                "gmtIssueZl": "2016-01-11 09:10:00",
                "gmtHandledZl": "2016-01-11 09:20:00",
                "zlId": 100045,
                "feedbackResultDesc": "无风险"
            }, {
                "gmtModified": "2016-01-14 20:21:34",
                "gmtLateOperateZl": "2016-01-11 15:40:00",
                "actCodeDesc": "见面核查",
                "gmtCreate": "2016-01-14 20:21:34",
                "feedbackResultCode": null,
                "checkUnits": "双基",
                "actCode": "MEET_VERIF",
                "stateCode": "IN_PROCES",
                "isOvertime": "否",
                "gmtFinishedZl": null,
                "id": 212,
                "gmtCreateZl": "2016-01-11 15:20:00",
                "content": "路边摆摊被城管、工商处罚，是否存在报复社会倾向",
                "stateDesc": "处理中",
                "gmtIssueZl": "2016-01-11 15:30:00",
                "gmtHandledZl": "2016-01-11 15:40:00",
                "zlId": 100046,
                "feedbackResultDesc": null
            }]
        },
        "code": "200"
    }
}