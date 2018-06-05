var express = require('express');
var router = express.Router();

var request = require('../service/request');

router.get('/markdown', function(req, res, next) {
    const json = {"id":1159,"postsId":29,"title":"SUMMARY.md","href":"https://raw.love2.io/ayamefing/blockchain_guide/d5b4ba043bcbb034f18c79eb7a082c9b952e759e/SUMMARY.md","text":"# Summary\n\n* [前言](README.md)\n* [修订记录](revision.md)\n* [如何贡献](contribute.md)\n* [区块链思想的诞生与概念](born/README.md)\n  * [从数字货币说起](born/currency.md)\n  * [比特币：前所未有的社会学实验](born/bitcoin.md)\n  * [区块链核心概念](born/what.md)\n  * [小结](born/summary.md)\n* [区块链技术的价值、挑战与展望](intro/README.md)\n  * [商业价值](intro/business.md)\n  * [关键技术和挑战](intro/tech.md)\n  * [趋势与展望](intro/vision.md)\n  * [小结](intro/summary.md)\n* [ 典型应用场景](scenario/README.md)\n  * [金融服务](scenario/trading.md)\n  * [征信和权属管理](scenario/trust.md)\n  * [资源共享](scenario/sharing.md)\n  * [投资管理](scenario/capital.md)\n  * [物联网与供应链](scenario/iot.md)\n  * [其它场景](scenario/others.md)\n  * [小结](scenario/summary.md)\n* [分布式系统核心问题](distribute_system/README.md)\n  * [一致性问题](distribute_system/problem.md)\n  * [共识算法](distribute_system/consensus.md)\n  * [FLP 不可能性原理](distribute_system/flp.md)\n  * [CAP 原理](distribute_system/cap.md)\n  * [ACID 原则](distribute_system/acid.md)\n  * [Paxos 与 Raft](distribute_system/paxos.md)\n  * [拜占庭问题与算法](distribute_system/bft.md)\n  * [可靠性指标](distribute_system/availability.md)\n  * [小结](distribute_system/summary.md)\n* [密码学与安全技术](crypto/README.md)\n  * [Hash 算法与摘要](crypto/hash.md)\n  * [加解密算法](crypto/algorithm.md)\n  * [数字签名](crypto/signature.md)\n  * [数字证书](crypto/cert.md)\n  * [PKI 体系](crypto/pki.md)\n  * [Merkle 树](crypto/merkle_trie.md)\n  * [同态加密](crypto/homoencryption.md)\n  * [其它问题](crypto/others.md)\n  * [小结](crypto/summary.md)\n* [比特币项目 -- 思想诞生的摇篮](bitcoin/README.md)\n  * [简介](bitcoin/introductin.md)\n  * [原理和设计](bitcoin/design.md)\n  * [挖矿](bitcoin/mining.md)\n  * [工具](bitcoin/tools.md)\n  * [共识机制](bitcoin/consensus.md)\n  * [闪电网络](bitcoin/lightning_network.md)\n  * [侧链](bitcoin/sidechain.md)\n  * [小结](bitcoin/summary.md)\n* [Ethereum（以太坊）-- 技术落地的实验](ethereum/README.md)\n  * [简介](ethereum/intro.md)\n  * [安装](ethereum/install.md)\n  * [相关工具](ethereum/tools.md)\n  * [协议设计](ethereum/design.md)\n  * [智能合约示例一](ethereum/smartContract_example01.md)\n  * [小结](ethereum/summary.md)\n* [Hyperledger（超级账本）-- 商用分布式账本](hyperledger/README.md)\n  * [诞生与发展](hyperledger/history.md)\n  * [社区组织](hyperledger/community.md)\n  * [五大顶级项目](hyperledger/top_project.md)\n  * [开发和提交代码](hyperledger/contribute.md)\n  * [小结](hyperledger/summary.md)\n* [Fabric 部署与管理](fabric/README.md)\n  * [简介](fabric/intro.md)\n  * [使用 Fabric 1.0 版本](fabric/1.0.md)\n  * [Fabric v0.6](fabric/v0.6/README.md)\n    * [安装部署](fabric/v0.6/install.md)\n    * [使用 chaincode](fabric/v0.6/usage.md)\n    * [权限管理](fabric/v0.6/membersrcv-usage.md)\n    * [Python 客户端](fabric/v0.6/hyperledger-py.md)\n  * [小结](fabric/summary.md)\n* [区块链应用开发](app_dev/README.md)\n  * [简介](app_dev/intro.md)\n  * [链上代码工作原理](app_dev/chaincode.md)\n  * [示例一：信息公证](app_dev/chaincode_example01.md)\n  * [示例二：交易资产](app_dev/chaincode_example02.md)\n  * [示例三：数字货币发行与管理](app_dev/chaincode_example03.md)\n  * [示例四：学历认证](app_dev/chaincode_example04.md)\n  * [示例五：社区能源共享](app_dev/chaincode_example05.md)\n  * [小结](app_dev/summary.md)\n* [Fabric 架构与设计](fabric_design/README.md)\n  * [简介](fabric_design/intro.md)\n  * [架构设计](fabric_design/design.md)\n  * [消息协议](fabric_design/protocol.md)\n  * [小结](fabric_design/summary.md)\n* [区块链即服务](baas/README.md)\n  * [Bluemix BaaS](baas/bluemix.md)\n  * [超能 BaaS](baas/sv.md)\n  * [使用 Hyperledger Cello 搭建区块链服务](baas/cello.md)\n  * [小结](baas/summary.md)\n* [性能与评测](evaluation/README.md)\n  * [简介](evaluation/intro.md)\n  * [Hyperledger Fabric v0.6](evaluation/hyperledger.md)\n  * [小结](evaluation/summary.md)\n* [附录](appendix/README.md)\n  * [术语](appendix/terms.md)\n  * [常见问题](appendix/faq.md)\n  * [相关组织](appendix/companies.md)\n  * [ProtoBuf 与 gRPC](appendix/grpc.md)\n  * [资源链接](appendix/resources.md)\n\n"};
    res.render('md/markdown', { title: 'Markdown' , context: json.text});
});


router.get('/preview-md', function(req, res, next) {
    const summary = {"id":1159,"postsId":29,"title":"SUMMARY.md","href":"https://raw.love2.io/ayamefing/blockchain_guide/d5b4ba043bcbb034f18c79eb7a082c9b952e759e/SUMMARY.md","text":"# Summary\n\n* [前言](README.md)\n* [修订记录](revision.md)\n* [如何贡献](contribute.md)\n* [区块链思想的诞生与概念](born/README.md)\n  * [从数字货币说起](born/currency.md)\n  * [比特币：前所未有的社会学实验](born/bitcoin.md)\n  * [区块链核心概念](born/what.md)\n  * [小结](born/summary.md)\n* [区块链技术的价值、挑战与展望](intro/README.md)\n  * [商业价值](intro/business.md)\n  * [关键技术和挑战](intro/tech.md)\n  * [趋势与展望](intro/vision.md)\n  * [小结](intro/summary.md)\n* [ 典型应用场景](scenario/README.md)\n  * [金融服务](scenario/trading.md)\n  * [征信和权属管理](scenario/trust.md)\n  * [资源共享](scenario/sharing.md)\n  * [投资管理](scenario/capital.md)\n  * [物联网与供应链](scenario/iot.md)\n  * [其它场景](scenario/others.md)\n  * [小结](scenario/summary.md)\n* [分布式系统核心问题](distribute_system/README.md)\n  * [一致性问题](distribute_system/problem.md)\n  * [共识算法](distribute_system/consensus.md)\n  * [FLP 不可能性原理](distribute_system/flp.md)\n  * [CAP 原理](distribute_system/cap.md)\n  * [ACID 原则](distribute_system/acid.md)\n  * [Paxos 与 Raft](distribute_system/paxos.md)\n  * [拜占庭问题与算法](distribute_system/bft.md)\n  * [可靠性指标](distribute_system/availability.md)\n  * [小结](distribute_system/summary.md)\n* [密码学与安全技术](crypto/README.md)\n  * [Hash 算法与摘要](crypto/hash.md)\n  * [加解密算法](crypto/algorithm.md)\n  * [数字签名](crypto/signature.md)\n  * [数字证书](crypto/cert.md)\n  * [PKI 体系](crypto/pki.md)\n  * [Merkle 树](crypto/merkle_trie.md)\n  * [同态加密](crypto/homoencryption.md)\n  * [其它问题](crypto/others.md)\n  * [小结](crypto/summary.md)\n* [比特币项目 -- 思想诞生的摇篮](bitcoin/README.md)\n  * [简介](bitcoin/introductin.md)\n  * [原理和设计](bitcoin/design.md)\n  * [挖矿](bitcoin/mining.md)\n  * [工具](bitcoin/tools.md)\n  * [共识机制](bitcoin/consensus.md)\n  * [闪电网络](bitcoin/lightning_network.md)\n  * [侧链](bitcoin/sidechain.md)\n  * [小结](bitcoin/summary.md)\n* [Ethereum（以太坊）-- 技术落地的实验](ethereum/README.md)\n  * [简介](ethereum/intro.md)\n  * [安装](ethereum/install.md)\n  * [相关工具](ethereum/tools.md)\n  * [协议设计](ethereum/design.md)\n  * [智能合约示例一](ethereum/smartContract_example01.md)\n  * [小结](ethereum/summary.md)\n* [Hyperledger（超级账本）-- 商用分布式账本](hyperledger/README.md)\n  * [诞生与发展](hyperledger/history.md)\n  * [社区组织](hyperledger/community.md)\n  * [五大顶级项目](hyperledger/top_project.md)\n  * [开发和提交代码](hyperledger/contribute.md)\n  * [小结](hyperledger/summary.md)\n* [Fabric 部署与管理](fabric/README.md)\n  * [简介](fabric/intro.md)\n  * [使用 Fabric 1.0 版本](fabric/1.0.md)\n  * [Fabric v0.6](fabric/v0.6/README.md)\n    * [安装部署](fabric/v0.6/install.md)\n    * [使用 chaincode](fabric/v0.6/usage.md)\n    * [权限管理](fabric/v0.6/membersrcv-usage.md)\n    * [Python 客户端](fabric/v0.6/hyperledger-py.md)\n  * [小结](fabric/summary.md)\n* [区块链应用开发](app_dev/README.md)\n  * [简介](app_dev/intro.md)\n  * [链上代码工作原理](app_dev/chaincode.md)\n  * [示例一：信息公证](app_dev/chaincode_example01.md)\n  * [示例二：交易资产](app_dev/chaincode_example02.md)\n  * [示例三：数字货币发行与管理](app_dev/chaincode_example03.md)\n  * [示例四：学历认证](app_dev/chaincode_example04.md)\n  * [示例五：社区能源共享](app_dev/chaincode_example05.md)\n  * [小结](app_dev/summary.md)\n* [Fabric 架构与设计](fabric_design/README.md)\n  * [简介](fabric_design/intro.md)\n  * [架构设计](fabric_design/design.md)\n  * [消息协议](fabric_design/protocol.md)\n  * [小结](fabric_design/summary.md)\n* [区块链即服务](baas/README.md)\n  * [Bluemix BaaS](baas/bluemix.md)\n  * [超能 BaaS](baas/sv.md)\n  * [使用 Hyperledger Cello 搭建区块链服务](baas/cello.md)\n  * [小结](baas/summary.md)\n* [性能与评测](evaluation/README.md)\n  * [简介](evaluation/intro.md)\n  * [Hyperledger Fabric v0.6](evaluation/hyperledger.md)\n  * [小结](evaluation/summary.md)\n* [附录](appendix/README.md)\n  * [术语](appendix/terms.md)\n  * [常见问题](appendix/faq.md)\n  * [相关组织](appendix/companies.md)\n  * [ProtoBuf 与 gRPC](appendix/grpc.md)\n  * [资源链接](appendix/resources.md)\n\n"};
    const json = {"id":1164,"postsId":29,"title":"从数字货币说起","href":"https://raw.love2.io/ayamefing/blockchain_guide/d5b4ba043bcbb034f18c79eb7a082c9b952e759e/born/currency.md","text":"## 从数字货币说起\n\n货币是人类文明发展过程中的一大发明，最重要的职能包括价值尺度、流通手段、贮藏手段。很难想象离开了货币，现代社会庞大而复杂的经济和金融体系还能否持续运转。\n\n历史上，货币的形态经历了多个阶段的演化，包括实物货币、金属货币、代用货币、信用货币、电子货币、数字货币等。货币自身的价值依托也从实物价值、发行方信用价值，到今天出现的对信息系统（包括算法、数学、密码学、软件等）的信任价值。\n\n*注：中国最早的关于货币的确切记载“夏后以玄币”出现在恒宽《盐铁论·错币》。*\n\n### 需求\n\n一般等价物都可以作为货币使用。然而平时最常见的还是纸币本位制，既方便携带、不易仿制、又相对容易辩伪。\n\n*注意，严格来讲，货币（money）不等于现金或通货（cash，currency），货币的范围更广。*\n\n或许有人认为信用卡相对纸币形式更方便。相对于信用卡这样的集中式支付体系来说，货币提供了更好的匿名性。另外，一旦碰到系统故障、断网、没有刷卡机器等情况，信用卡就不可用了。\n\n无论是货币，还是信用卡模式，都需要额外的系统（例如银行）来完成生产、分发、管理等操作，带来很大的额外成本和使用风险。诸如伪造、信用卡诈骗、盗刷、转账等安全事件屡见不鲜。\n\n很自然的，如果能实现一种数字货币，保持既有货币的这些特性，消除纸质货币的缺陷，无疑将带来巨大的社会变革，极大提高经济活动的运作效率。\n\n### 比较\n\n让我们来对比现在的数字货币和现实生活中的纸币：\n\n| 属性 | 分析 | 胜出方 |\n| :--- | :--- | :--- |\n| 便携 | 这点上应该没有争议，显然数字形式的货币胜出。 | 数字货币 |\n| 防伪 | 这点上应该说两者各有千秋，但数字货币可能略胜一筹。纸币依靠的是各种设计（纸张、油墨、暗纹、夹层等）上的精巧，数字货币依靠的则是密码学上的保障。事实上，纸币的伪造时有发生，但数字货币的伪造明面上还没能实现。 | 数字货币 |\n| 辩伪 | 纸币即使依托验钞机仍会有误判情况，数字货币依靠密码学基本不可能出错。数字货币胜出。 | 数字货币 |\n| 匿名 | 通常情况下，两者都能提供很好的匿名性。但都无法防御有意的追踪。 | 平局 |\n| 交易 | 对纸币来说，谁持有纸币就是合法拥有者，交易通过纸币自身的转移即可完成。对数字货币来说则复杂的多，因为任何数字物品都是可以被复制的，因此需要额外的机制。为此，比特币发明了区块链技术来确保可靠不可篡改的交易。 | 纸币 |\n| 资源 | 100 美元钞票的生产成本是 0.1 美元左右。100 面额人民币的生产成本说法众多，但估计应该在几毛到几块范围内。数字货币消耗的资源则复杂的多，以最坏情况估计，算出来多少就要消耗多少电（往往要更多）。 | 纸币 |\n| 发行 | 纸币的发行需要第三方机构的参与，数字货币则通过分布式算法来完成发行。在人类历史上，通胀和通缩往往是不合理地发行货币造成的；数字货币尚无机会被验证，在这方面的表现还有待观察。 | 平局 |\n\n可见，数字货币并非在所有领域都优于已有的货币形式。不带前提的在所有领域都鼓吹数字货币并不是一种严谨的态度，应该针对具体情况具体分析。实际上，仔细观察目前支持数字货币的交易机构就会发现端倪，当前还没有一种数字货币能完整起到货币的职能。\n\n最后，虽然当前的数字货币“实验”已经取得了巨大成功，但可见的局限也很明显：其依赖的分布式账本技术还缺乏大规模场景下考验；性能和安全性还有待提升；资源的消耗还过高等等。这些问题还有待于相关技术的进一步发展。\n\n### 实现挑战\n\n设计和实现一个数字货币并非易事。\n\n在现实生活中，因为纸币具备可转移性，相对容易地完成价值的交割。但是因为电子内容天然具备零复制成本，无法通过发送电子内容来完成价值的转移。持有人可以试图将同一份电子货币发给多个人，这种被称为“双重支付攻击（Double-Spent）”。\n\n也许有人会讲，当前银行中的货币都是电子化的，因为通过账号里面的数字记录了资产。说的没错，这种电子货币模式有人称为“数字货币 1.0”，它实际上是假定存在一个安全可靠的第三方记账机构来实现，这个机构利用信用作为抵押，来完成交易。\n\n这种中心化控制下的数字货币实现相对简单，但需要一个中心管控系统。但是，很多时候并不存在一个安全可靠的第三方记账机构来充当这个中心管控的角色。\n\n例如，贸易两国可能缺乏足够的外汇储备；网络上的匿名双方进行直接买卖；交易的两个机构彼此互不信任，找不到双方都认可的第三方担保；汇率的变化；可能无法连接到第三方的系统；第三方的系统可能会出现故障……\n\n总结一下，在去中心化的场景下，存在几个难题：\n\n* 货币的防伪：谁来负责验证货币；\n* 货币交易：如何确定货币从一方转移到另外一方；\n* 避免双重支付：如何避免出现双重支付。\n\n好吧，这事其实不太容易。\n\n### 比特币出现\n\n在不存在一个第三方记账机构的情况下，如何实现一个数字货币系统呢？\n\n近三十年来，数字货币技术朝着这个方向努力，经历了几代演进，包括 [e-Cash](http://www.hit.bme.hu/~buttyan/courses/BMEVIHIM219/2009/Chaum.BlindSigForPayment.1982.PDF)、[HashCash](http://en.wikipedia.org/wiki/Hashcash)、[B-money](http://www.weidai.com/bmoney.txt) 等。\n\n1983 年，[David Chaum](https://en.wikipedia.org/wiki/David_Chaum) 最早提出[ecash](http://www.hit.bme.hu/~buttyan/courses/BMEVIHIM219/2009/Chaum.BlindSigForPayment.1982.PDF)，并于 1989 年创建了 [Digicash](https://en.wikipedia.org/wiki/Digicash) 公司。ecash 系统是首个匿名化的数字加密货币（anonymous cryptographic electronic money, or electronic cash system），基于 David Chaum 发明的盲签名技术，曾被应用于银行小额支付中。ecash 依赖于一个中心化的中介机构，导致它最终失败。\n\n1997 年，[Adam Back](https://en.wikipedia.org/wiki/Adam_Back) 发明了 [Hashcash](http://en.wikipedia.org/wiki/Hashcash)，来解决邮件系统中 DoS 攻击问题。Hashcash 首次提出用工作量证明（Proof of Work，PoW）机制来获取额度，该机制后来被后续数字货币技术所采用。\n\n1998 年，[Wei Dai](http://www.weidai.com) 提出了 [B-money](http://www.weidai.com/bmoney.txt)，将 PoW 引入数字货币生成过程中。B-money 同时是首个面向去中心化设计的数字货币。从概念上看已经比较完善，但是很遗憾的是，其未能提出具体的设计实现。\n\n上面这些数字货币都或多或少的依赖于一个第三方系统的信用担保。直到比特币的出现，将 PoW 与共识机制结合在一起，**首次从实践意义上实现了一套去中心化的数字货币系统**。\n\n比特币网络无需任何管理机构，自身通过数学和密码学原理来确保了所有交易的成功进行，比特币自身的价值是通过背后的计算力为背书。这也促使人们开始思考在未来的数字世界中，该如何衡量价值，如何发行货币。\n\n目前看来，数字货币比较有影响力的模式有两种，一种是类似 paypal 这样的选择跟已有的系统合作，成为代理；一种是以比特币这样的完全丢弃已有体系的分布式技术。\n\n现在还很难讲哪种模式将成为未来的主流，甚至未来还可能出现更先进的技术。但对比特币这一类数字货币的设计进行探索，将是一件十分有趣的事情。\n"};
    res.render('md/preview-md', { title: 'Markdown' , summary : summary.text, context: json.text });
});

router.get('/summary/:id', function(req, res, next) {
    const url = '/love2io/summary/' + req.params.id;
    getSummary(url, req, res);
});

router.get('/summary/:id/*', function(req, res, next) {
    const url = '/love2io/summary/' + req.params.id + '?name=' + req.params['0'];
    getSummary(url, req, res);
});

const getSummary = function (url, req, res) {
    request.get(url, function(body){
        const bodyJson = JSON.parse(body);
        if(bodyJson.code === 200){
            const data = bodyJson.data;
            res.render('md/preview-md', { title: 'Markdown' , postsId: data.postsId, summary : data.summary, context: data.context });
        }else {
            console.error(bodyJson.msg);
            res.end();
        }
    });
};

module.exports = router;