var searchIndex = {};
searchIndex['canal'] = {"items":[[0,"","canal","### Canal",null,null],[0,"broadcast","","A Single-Producer, Multiple-Consumer queue.",null,null],[3,"Broadcast","canal::broadcast","Struct that sends message on a broadcast pattern.",null,null],[3,"Consumer","","Struct that receives messages from Broadcast.",null,null],[4,"BroadcastError","","Error from broadcast module.",null,null],[13,"SendError","","Send error",0,null],[13,"RecvError","","Receive error",0,null],[5,"broadcast_channel","","Create a (Broadcast<T>, Consumer<T>) pair.",null,null],[11,"fmt","","",0,{"inputs":[{"name":"broadcasterror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",0,{"inputs":[{"name":"broadcasterror"}],"output":{"name":"broadcasterror"}}],[11,"eq","","",0,{"inputs":[{"name":"broadcasterror"},{"name":"broadcasterror"}],"output":{"name":"bool"}}],[11,"ne","","",0,{"inputs":[{"name":"broadcasterror"},{"name":"broadcasterror"}],"output":{"name":"bool"}}],[11,"fmt","","",0,{"inputs":[{"name":"broadcasterror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",0,{"inputs":[{"name":"broadcasterror"}],"output":{"name":"str"}}],[11,"cause","","",0,{"inputs":[{"name":"broadcasterror"}],"output":{"name":"option"}}],[11,"from","","",0,{"inputs":[{"name":"broadcasterror"},{"name":"senderror"}],"output":{"name":"broadcasterror"}}],[11,"from","","",0,{"inputs":[{"name":"broadcasterror"},{"name":"recverror"}],"output":{"name":"broadcasterror"}}],[11,"new","","Create a new Broadcast struct.",1,{"inputs":[{"name":"broadcast"}],"output":{"name":"broadcast"}}],[11,"consume","","Create a Consumer that listens to messages from the Broadcaster.",1,{"inputs":[{"name":"broadcast"}],"output":{"name":"consumer"}}],[11,"send","","Send a message on the broadcast.",1,{"inputs":[{"name":"broadcast"},{"name":"t"}],"output":{"name":"result"}}],[11,"recv","","Receive a message from the Broadcast.",2,{"inputs":[{"name":"consumer"}],"output":{"name":"result"}}],[11,"clone","","",2,{"inputs":[{"name":"consumer"}],"output":{"name":"self"}}],[0,"mpmc","canal","A multi-producer, multi-consumer channel implementation.",null,null],[3,"MutexLinkedList","canal::mpmc","A mutex-locked List that is safe for push/pop on multiple threads.",null,null],[3,"LockFreeQueue","","A lock-free queue that is thread-safe for multiple producers and multiple consumers.",null,null],[3,"Sender","","The sending-half of the mpmc channel.",null,null],[3,"Receiver","","The receiving-half of the mpmc channel.",null,null],[4,"Failure","","Failure modes for receiving on the port.",null,null],[13,"Empty","","There is nothing to recieve.",3,null],[13,"Disconnected","","The port is disconnected.",3,null],[5,"mpmc_channel","","Create a channel pair using a lock-free queue with specified capacity.",null,null],[11,"new","","Create a new MutexLinkedList.",4,{"inputs":[{"name":"mutexlinkedlist"}],"output":{"name":"mutexlinkedlist"}}],[11,"push","","Push a value onto queue.",4,{"inputs":[{"name":"mutexlinkedlist"},{"name":"t"}],"output":null}],[11,"pop","","Pop a value off the queue.",4,{"inputs":[{"name":"mutexlinkedlist"}],"output":{"name":"option"}}],[11,"clone","","",4,{"inputs":[{"name":"mutexlinkedlist"}],"output":{"name":"mutexlinkedlist"}}],[11,"with_capacity","","Create a LockFreeQueue with specified capacity.",5,{"inputs":[{"name":"lockfreequeue"},{"name":"usize"}],"output":{"name":"lockfreequeue"}}],[11,"push","","Push a value onto a queue.",5,{"inputs":[{"name":"lockfreequeue"},{"name":"t"}],"output":{"name":"result"}}],[11,"pop","","Pop a value from a queue.",5,{"inputs":[{"name":"lockfreequeue"}],"output":{"name":"option"}}],[11,"fmt","","",3,{"inputs":[{"name":"failure"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"send","","Sends data to the channel.",6,{"inputs":[{"name":"sender"},{"name":"t"}],"output":{"name":"result"}}],[11,"clone","","",6,{"inputs":[{"name":"sender"}],"output":{"name":"sender"}}],[11,"drop","","",6,{"inputs":[{"name":"sender"}],"output":null}],[11,"recv","","Receive data from the channel.",7,{"inputs":[{"name":"receiver"}],"output":{"name":"result"}}],[11,"clone","","",7,{"inputs":[{"name":"receiver"}],"output":{"name":"receiver"}}],[11,"drop","","",7,{"inputs":[{"name":"receiver"}],"output":null}]],"paths":[[4,"BroadcastError"],[3,"Broadcast"],[3,"Consumer"],[4,"Failure"],[3,"MutexLinkedList"],[3,"LockFreeQueue"],[3,"Sender"],[3,"Receiver"]]};
initSearch(searchIndex);
