/**
requireJs i18n插件 本地化
根配置文件
通过navigator.language或navigator.userLanguage来判断对应语言
1.文件夹和文件，key都使用小写
2.都放在nls文件夹下
3.也可以不通过判断语言而在config文件中配置一种指定语言
*/
define({
	"root":true,
	"zh-cn":true,
	"en-us":true
});