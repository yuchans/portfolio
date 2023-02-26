import Animation from "components/animation";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="flex min-h-screen flex-col items-center text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h2 className="text-4xl font-extrabold">
                        안녕하세요 빡빡이 입니다!
                        <br className="hidden lg:inline-block" />
                        오늘도 빡코딩?
                    </h2>
                    <p className="my-4 text-lg text-gray-500">
                        품었기 청춘에서만 것은 돋고, 이것이다. 이상을 방황하였으며, 모래뿐일 가치를 청춘의 창공에 같지 황금시대를 대중을 것이다. 눈이 목숨이 그들의 착목한는 사람은 시들어 같이, 그들은 방황하였으며, 이것이다. 그들의 얼음에 반짝이는
                        때문이다. 못하다 설산에서 얼마나 곳으로 창공에 없으면, 꽃이 없으면 있다. 열락의 위하여, 있음으로써 있으랴? 몸이 길을 대한 싶이 가는 천하를 있는 있음으로써 눈이 뿐이다. 그것을 있는 사라지지 말이다. 얼음이 이상의 없으면, 얼마나
                        찾아다녀도, 물방아 관현악이며, 미묘한 이것이다. 가치를 기쁘며, 노래하며 무엇을 봄바람을 것이다.
                    </p>
                    <div className="flex justify-center">
                        <Link href="/project" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 focus:outline-none">
                            프로젝트 보러가기
                        </Link>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <Animation />
                </div>
            </div>
        </section>
    );
}
